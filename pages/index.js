import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DonateBanner from 'container/Home/DonateBanner/DonateBanner';
import Container from 'container/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import GetAPIData, { getLatestNewsData, getHomeNewsData, getHomeArticlesData } from 'services/get_api_data';
import NewsSection from 'components/NewsSection/NewsSection';
import { ArrowRight } from "@styled-icons/bootstrap";

export default function Home({ newsData }) {

  const [homeNewsData, setHomeNewsData] = useState([]);

  useEffect(() => {
    // const homePageNews = getHomeNewsData(newsData);
    // console.log('homePageNews', homePageNews)
    // setHomeNewsData(homePageNews);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Link Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DonateBanner />
        <Container>
          <SectionTitle
            title={<Heading content="Latest News" />}
            link={
              <Link href='/news'>
                <a>View all <ArrowRight size={22}/> </a>
              </Link>
            }
          />
          <NewsSection homeNewsData={newsData}/>
        </Container>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  // const apiUrl = [
  //   {
  //     endpoint: 'newsapi',
  //     name: 'NewsHome',
  //   }
  // ];
  // const pageData = await GetAPIData(apiUrl);
  // let newsData = pageData;

  let newsData =  await getHomeArticlesData();

  return {
    props: { newsData },
  };
}
