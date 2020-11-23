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
import newsapi from 'static/data/newsapi.json';
import { get } from 'lodash';

export default function Home({  }) {

  const [homeNewsData, setHomeNewsData] = useState([]);

  useEffect(() => {

    setHomeNewsData(get(newsapi, `articles`, []).slice(0, 6));
    // const homePageNews = getHomeNewsData(newsData);
    // console.log('homePageNews', homePageNews)
    // setHomeNewsData(homePageNews);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Link Dev</title>
        <link rel="icon" type="image/jpg" sizes="32x32" href="assets/images/LinkdevLogo.jpg" />
      </Head>

      <main>
        <DonateBanner />
        <Container fullWidth={true}>
          <SectionTitle
            title={<Heading content="Latest News" />}
            link={
              <Link href='/news'>
                <a>View all <ArrowRight size={22}/> </a>
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

  // let newsData =  await getHomeArticlesData();

  return {
    props: {  },
  };
}
