import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DonateBanner from 'container/Home/DonateBanner/DonateBanner';
import Container from 'container/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import GetAPIData, { getLatestNewsData, getHomeNewsData } from 'services/get_api_data';
import NewsSection from 'components/NewsSection/NewsSection';

export default function Home({ newsData }) {

  const [homeNewsData, setHomeNewsData] = useState([]);

  useEffect(() => {
    const homePageNews = getHomeNewsData(newsData);
    console.log('homePageNews', homePageNews)
    setHomeNewsData(homePageNews);
  }, []);

  console.log('newsHomeData', newsData)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DonateBanner />
        <Container noGutter={true}>
          <SectionTitle
            title={<Heading content="Latest News" />}
            link={
              <Link href='/'>
                <a>View all</a>
              </Link>
            }
          />
          <NewsSection homeNewsData={homeNewsData}/>
        </Container>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'newsapi',
      name: 'NewsHome',
    }
  ];
  const pageData = await GetAPIData(apiUrl);
  let newsData = pageData;

  // if (pageData) {
  //   pageData.forEach((item, key) => {
  //     if (item.name === 'NewsHome') {
  //       newsHomeData = item.data ? [...item.data] : [];
  //     } 
  //   });
  // }

  return {
    props: { newsData },
  };
}
