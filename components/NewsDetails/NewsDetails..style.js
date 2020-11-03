import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const NewsDetailsWrapper = styled.div`
    margin-bottom: 50px;
    .news-details-wrapper{
        background-color: ${themeGet('color.1', '#ffffff')};
        padding: 30px;
    }
    h1{
        font-size: 28px;
        line-height: 31px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    img{
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 5px 5px 0px 0px;
    }
    h5{
        font-size: 18px;
        line-height: 21px;
        font-weight: 700;
        color: #908c8c;
    }

    h3{
        font-size: 24px;
        line-height: 27px;
        font-weight: bolder;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    p{
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 30px;
        color: #908c8c;
    }
`;

