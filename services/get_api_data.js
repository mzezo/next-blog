import fetch from 'isomorphic-unfetch';
import { get } from 'lodash';
const FetchAPIData = (url) => {
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        return data;
    });
};

export const getHomeNewsData = (newsData) => {
    const news = get(newsData,`[${0}].data.articles`, []);
    let homePageNews = news.filter(newsItem => {
        return newsItem.showOnHomepage === true ;
    });
    return homePageNews.slice(0, 6);
};

export const getNewsData = (newsData) => {
  const allNews = get(newsData,`[${0}].data.articles`, []);
  return allNews;
};

export const getLatestNewsData = (newsData) => {

    // var resultProductData = product_data.filter(a => {
    //     var date = new Date(a.ProductHits);
    //     return (date >= startDate && date <= endDate);
    //   });
    //return newsData[0].data.articles.sort((a,b)=>a.publishedAt.getTime()-b.publishedAt.getTime());
};

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
    console.log('receviedData', receviedData);
    return receviedData;
  };
  
  export default GetAPIData;
  