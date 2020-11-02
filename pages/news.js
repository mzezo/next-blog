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
import GetAPIData, { getNewsData, Paginator } from 'services/get_api_data';

export default function NewsPage({ newsData, deviceType }) {
    console.log('----NewsPage-newsData----', newsData)
    // const { state, dispatch } = useContext(SearchContext);
    // const statekey = SearchStateKeyCheck(state);
    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const PageNews = getNewsData(newsData);
        setNews(PageNews.slice(0, 9));
        setAllNews(PageNews);
    }, []);

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
            </Head>
            <Container noGutter={true}>
                {/* <Sticky top={82} innerZ={999} activeClass="isHeaderSticky"> */}
                <SectionTitle
                    title={<Heading content="News" />}
                />
                <Toolbar
                    left={
                        deviceType === 'desktop' ? <CategorySearch newsData={newsData} />
                            :
                            // <MobileFilterDrawer />
                            ''
                    }
                />
                {/* </Sticky> */}

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

    const apiUrl = [
        {
            endpoint: 'newsapi',
            name: 'NewsHome',
        }
    ];
    const pageData = await GetAPIData(apiUrl);
    let newsData = pageData;
    return {
        props: { newsData, deviceType },
    };
}
