import React, { useState, useEffect, useRef } from "react";
import Box from 'components/UI/Box/Box';
import { get } from 'lodash';
import { Button } from 'antd';
import { TopNewsWrapper, NewsWrapper, SpinnerOverlay, SpinnerContainer } from './NewsSection.style';
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

  const userListRef = useRef(null);

  useEffect(() => {

  }, []);


  let showButton = homeNewsData.length < totalItem;

  return (
    <TopNewsWrapper>
      {!loading ?
      <React.Fragment>
        <NewsWrapper ref={userListRef}>
          {homeNewsData.map((newsItem, index) => {
            return (
              <NewsItem key={index} loading={loading} {...newsItem} />
            );
          })}
        </NewsWrapper>
      </React.Fragment>
       :
        (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
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


