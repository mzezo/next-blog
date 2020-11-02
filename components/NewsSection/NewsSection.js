import React, { useState, useEffect } from "react";
import Box from 'components/UI/Box/Box';
// import ImagePlaceHolder from 'assets/images/hotelImagePlaceholder.jpg';
import { get } from 'lodash';
import { Button } from 'antd';
import { TopNewsWrapper, NewsWrapper } from './NewsSection.style';
import NewsItem from './NewsItem';

const LoadMore = ({
    handleLoadMore,
    showButton,
    buttonText,
    loading,
    loadMoreComponent,
    loadMoreStyle,
  }) => {
    return (
      !!showButton && (
        <Box className="loadmore_wrapper" {...loadMoreStyle}>
          {loadMoreComponent ? (
            loadMoreComponent
          ) : (
            <Button loading={loading} onClick={handleLoadMore}>
              {buttonText || 'Load More'}
            </Button>
          )}
        </Box>
      )
    );
  };

const NewsSection = ({
    homeNewsData,
    totalItem, 
    handleLoadMore, 
    loading, 
    buttonText, 
    loadMoreComponent, 
    loadMoreStyle
    }) => {

    useEffect(() => {
       
    }, []);

    let showButton = homeNewsData.length < totalItem;

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

            {showButton && (
                <LoadMore
                    showButton={showButton}
                    handleLoadMore={handleLoadMore}
                    loading={loading}
                    buttonText={buttonText}
                    loadMoreComponent={loadMoreComponent}
                    loadMoreStyle={loadMoreStyle}
                />
            )}

        </TopNewsWrapper>
    )
}
export default NewsSection;


