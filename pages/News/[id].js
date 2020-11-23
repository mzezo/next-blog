import React from 'react';
import Head from 'next/head';
import { findArticleById } from 'services/get_api_data';
import Container from 'container/Container/Container';
import NewsDetails from 'components/NewsDetails/NewsDetails';

const NewsDetailsPage = ({ article }) => {
    return (
        <div className="container">
            <Head>
                <title>{article?.title}</title>
                <link rel="icon"  href="/LinkdevLogo.jpg" />
            </Head>
            <Container fullWidth={true}>
                <NewsDetails {...article} />
            </Container>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {

    const article = await findArticleById(id);

    return {
        props: { article },
    };
}

export default NewsDetailsPage;
