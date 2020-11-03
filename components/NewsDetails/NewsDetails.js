import React, {useState, useEffect} from 'react'
import { NewsDetailsWrapper } from './NewsDetails..style';
import { findCategoryById } from 'services/get_api_data';
import NewsData from 'static/data/newsapi.json';

const NewsDetails = ({id, urlToImage, title, content}) => {

    const[category, setCategory] = useState('');

    useEffect(async () => {
        const categoryItem =  await findCategoryById(id, NewsData);
        setCategory(categoryItem);
    }, []);

    return (
        <NewsDetailsWrapper>
            <h1>News Details</h1>
            <img src={urlToImage} alt="" />
            <div className="news-details-wrapper">
                <h5>{category?.name}</h5>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </NewsDetailsWrapper>
    )
}

export default NewsDetails
