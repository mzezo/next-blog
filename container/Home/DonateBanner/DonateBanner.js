import React from 'react';
import Container from 'container/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import GlideCarousel, {
    GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import BannerWrapper, { SearchWrapper, BannerImage } from './DonateBanner.style';
import { Button } from 'antd';

// slider images
// import bannerBg1 from 'assets/images/banner/1.jpg';
// import bannerBg2 from 'assets/images/banner/2.jpg';
// import bannerBg3 from 'assets/images/banner/3.jpg';

const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle }) => {
    return (
        <BannerWrapper>
            <GlideCarousel
                controls={true}
                // prevButton={false}
                options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
                bullets={true}
                numberOfBullets={3}
            >
                <>
                    <GlideSlide>
                        <BannerImage url="https://images.pexels.com/photos/4330872/pexels-photo-4330872.jpeg?cs=srgb&dl=pexels-denniz-futalan-4330872.jpg&fm=jpg"  />
                    </GlideSlide>
                    <GlideSlide>
                        <BannerImage url="https://images.pexels.com/photos/933622/pexels-photo-933622.jpeg?cs=srgb&dl=pexels-suraphat-nueaon-933622.jpg&fm=jpg"  />
                    </GlideSlide>
                    <GlideSlide>
                        <BannerImage url="https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?cs=srgb&dl=pexels-visionpic-net-3036405.jpg&fm=jpg"  />
                    </GlideSlide>
                </>
            </GlideCarousel>

            <Container>
                <SearchWrapper>
                    <Heading
                        {...searchTitleStyle}
                        content="AI Foundation"
                    />
                    <Text
                        {...searchDescriptionStyle}
                        content="is focused on inspiring the next generation of kids Healthcare professional."
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        //onClick={handleDonateNow}
                    >
                        Donate Now
                    </Button>
                </SearchWrapper>
            </Container>
        </BannerWrapper>
    );
};






export default HomeSearch;
