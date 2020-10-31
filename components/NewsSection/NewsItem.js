import React from 'react'
import { NewsItemWrapper, NewsItemDetailsWrapper, IconsWrapper } from './NewsSection.style';
import Moment from 'moment';
import { HeartOutlined, ShareAltOutlined, CalendarOutlined } from '@ant-design/icons'

const  NewsItem = ({title, description, urlToImage, publishedAt, content}) => {
    return (
        <NewsItemWrapper>
            <img src={urlToImage} alt={title} />
            <NewsItemDetailsWrapper>
                <IconsWrapper>
                    <HeartOutlined  style={{color: '#89b43e', fontSize: '22px', marginRight: '20px'}} />
                    <ShareAltOutlined  style={{color: '#89b43e', fontSize: '22px', marginRight: '20px'}} />
                </IconsWrapper>
                <h3>{title}</h3>
                <p>{description}</p>
                <h6> <CalendarOutlined style={{color: '#89b43e',fontSize: '18px', marginRight: '10px'}}/> {Moment(new Date(publishedAt)).format('ddd DD MMM YYYY')}</h6>
            </NewsItemDetailsWrapper>
        </NewsItemWrapper> 
    )
}

export default NewsItem
