import React, { useState, useEffect } from "react";
// import ImagePlaceHolder from 'assets/images/hotelImagePlaceholder.jpg';
import { get } from 'lodash';
import { TopNewsWrapper, NewsWrapper } from './NewsSection.style';
import NewsItem from './NewsItem';

const NewsSection = ({homeNewsData}) => {

    useEffect(() => {
       
    }, []);

    return (
        <TopNewsWrapper>
            {get(homeNewsData, 'length', 0) > 0 ?
                <React.Fragment>
                    <NewsWrapper>
                        {homeNewsData.map((newsItem, index) => {
                            return (
                                <NewsItem {...newsItem}/>
                            );
                        })}
                    </NewsWrapper>
                </React.Fragment>
                :
                (
                    ''
                )}
        </TopNewsWrapper>
    )
}
export default NewsSection;


