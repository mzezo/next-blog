import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${themeGet('colorr.1', '#f0f0f0')};
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  /* align-items: center; */
`;

export const MenuWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 45px 0px 5px;
    display: flex;
    /* justify-content: space-between; */


    @media (min-width: 768px) {
        max-width: 750px;
        width: 100%;
    }

    @media (min-width: 992px) {
        max-width: 970px;
        width: 100%;
    }

    @media (min-width: 1350px) {
        max-width: 1250px;
        width: 100%;
    }

    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

export const SecondaryFooterWrapper = styled.footer`
  width: 100%;
  background-color: ${themeGet('colorr.1', '#f0f0f0')};
  display: flex;
  
  margin-top: 30px;
  /* align-items: center; */
`;
export default FooterWrapper;