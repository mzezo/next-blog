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

export default function Home({ newsData }) {

  const [homeNewsData, setHomeNewsData] = useState([]);


  return (
    <div className="container">
      <Head>
        <title>Link Dev</title>
        <link rel="icon"  href="/LinkdevLogo.jpg" />
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
          <NewsSection homeNewsData={newsData}/>
        </Container>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;

  let newsData =  await getHomeArticlesData();

  return {
    props: { newsData },
  };
}
