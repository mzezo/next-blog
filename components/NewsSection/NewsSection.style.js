import styled from 'styled-components';


export const TopNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpinnerOverlay = styled.div`
  width: 90%;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    
    @media  (max-width: 765px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media  (max-width: 525px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NewsItemWrapper = styled.div`
    img{
        width: 100%;
        height: 190px;
        min-height: 190px;
        border-radius: 5px 5px 0px 0px;
        box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    }
`;



export const IconsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
`;

export const NewsItemDetailsWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 5px 5px;

    h3{
        margin-left: 20px;
        margin-right: 30px;
        padding-top: 15px;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 21px;
        font-weight: bolder;
        height: auto;
        min-height: 75px;
    }

    p{
        margin-left: 20px;
        margin-right: 30px;
        padding-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 18px;
        color: #828282;
        padding-bottom: 10px;
        /* max-height: 75px;
        max-width: 315px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
        /* display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; */
        display: -webkit-box;
        max-width: 315px;
        height: 109.2px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h6{
        margin-left: 20px;
        margin-right: 30px;
        font-size: 14px;
        font-weight: bolder;
        color: #828282;
        padding-bottom: 20px;
    }
`;


export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid #005997;
  border-radius: 50%;
  color: #005997;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
