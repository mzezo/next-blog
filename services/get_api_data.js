import fetch from 'isomorphic-unfetch';
import { get, isEmpty } from 'lodash';
const FetchAPIData = (url) => {
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
};

export const getHomeNewsData = (newsData) => {
  const news = get(newsData, `[${0}].data.articles`, []);
  let homePageNews = news.filter(newsItem => {
    return newsItem.showOnHomepage === true;
  });
  return homePageNews.slice(0, 6);
};

export const getNewsData = (newsData) => {
  const allNews = get(newsData, `[${0}].data.articles`, []);
  return allNews;
};

export const getLatestNewsData = (newsData) => {

  // var resultProductData = product_data.filter(a => {
  //     var date = new Date(a.ProductHits);
  //     return (date >= startDate && date <= endDate);
  //   });
  //return newsData[0].data.articles.sort((a,b)=>a.publishedAt.getTime()-b.publishedAt.getTime());
};

export const findArticleById = async (id) => {
  const data = await FetchAPIData(`${process.env.SERVER_API}/static/data/newsapi.json`);
  const articles = get(data, `articles`, []);
  const article = articles.find((item) => item.id === parseInt(id));
  return article;
}

export const findCategoryById = async (id, data) => {
  const categories = get(data, `sourceCategory`, []);
  const category = categories.find((item) => item.id === parseInt(id));
  return category;
}

export const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};


export const getArticlesData = async () => {
  const data = await FetchAPIData(`${process.env.SERVER_API}/static/data/newsapi.json`);
  const articles = get(data, `articles`, []);
  return articles;
}

export const getHomeArticlesData = async () => {
  const data = await FetchAPIData(`${process.env.SERVER_API}/static/data/newsapi.json`);
  const articles = get(data, `articles`, []);
  let homePageNews = articles.filter(newsItem => {
    return newsItem.showOnHomepage === true;
  });
  return homePageNews.slice(0, 6);
}

export const handleFilterNews = (query, news) => {
  console.log('handleFilterNews Query', query);
  const filterKeys = Object.keys(query);
  const filteredNews = news.filter(eachObj => {
    return filterKeys.every(eachKey => {
      console.log('eachKey', eachKey)

      if (isEmpty(query[eachKey])) {
        return true;
      }

       /** Category Filter */
      if (eachKey === 'sourceID') {
        console.log('eachObj[eachKey]', eachObj[eachKey]);
        console.log('query[eachKey]', query[eachKey]);
        return eachObj[eachKey] === query[eachKey];
      }


      /** News Title Filter */
      if (eachKey === 'title') {
        return eachObj[eachKey].toLowerCase().includes(query[eachKey].toLowerCase())
      }


    });
  });
  return filteredNews;
}

const GetAPIData = async (apiUrl) => {
  const promises = apiUrl.map(async (repo) => {
    const apiPath = `${process.env.SERVER_API}/static/data`; // read it from env variable
    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await FetchAPIData(api);
    return {
      name: repo.name,
      data: response,
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

export default GetAPIData;
