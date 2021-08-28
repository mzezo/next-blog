import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Heading from 'components/UI/Heading/Heading';
import Container from 'container/Container/Container';
import Toolbar from 'components/UI/Toolbar/Toolbar';
import CategorySearch from 'container/Listing/CategorySearch/CategorySearch';
import NewsSection from 'components/NewsSection/NewsSection';
import ListingWrapper, { } from 'container/Listing/Listing.style';
import { getDeviceType } from 'services/get_device_type';
import GetAPIData, { SearchStateKeyCheck, handleFilterNews, Paginator } from 'services/get_api_data';
import newsapi from 'static/data/newsapi.json';
import { SearchContext } from 'context/SearchProvider'; 
import { get } from 'lodash';

export default function NewsPage({  deviceType }) {
    const { searchItems, dispatch } = useContext(SearchContext);
    // console.log(' NewsPage Context', searchItems);
    // const statekey = SearchStateKeyCheck(searchItems);
    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState(get(newsapi, `articles`, []));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const newData = handleFilterNews(searchItems, allNews);
            console.log('handleFilterNews', newData);
            setNews(newData.slice(0, 9));
            setLoading(false);
        }, 1000);
    }, [searchItems]);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            const data = Paginator(news, allNews, 9);
            setNews(data);
            setLoading(false);
        }, 1000);
    };

    return (
        <ListingWrapper>
            <Head>
                <title>News</title>
                <link rel="icon"  href="/LinkdevLogo.jpg" />
            </Head>
            <Container  fullWidth={true}>
                <SectionTitle
                    title={<Heading content="News" />}
                />
                <Toolbar
                    left={
                        deviceType === 'desktop' ? <CategorySearch newsData={news} />
                            :
                            // <MobileFilterDrawer />
                            ''
                    }
                />
                <NewsSection 
                    homeNewsData={news} 
                    handleLoadMore={handleLoadMore} 
                    loading={loading} 
                    totalItem={allNews.length} 
                />
            </Container>
        </ListingWrapper>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const deviceType = getDeviceType(req);
    // const newsData = await getArticlesData();
    //let newsData = pageData;
    return {
        props: { deviceType },
    };
}
