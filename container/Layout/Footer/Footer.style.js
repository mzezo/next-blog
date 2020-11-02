import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const FooterMenuWrapper = styled.footer`
  width: 100%;
  padding: 10px 70px 10px 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  h5
  {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 25px;
    color: #a3a0a0;
  }

  .ant-input-group-wrapper {
        width: 320px;
        @media only screen and (max-width: 480px) {
          width: 270px;
        }
        .ant-btn-primary {
            background: ${themeGet('text.4', '#2C2C2C')};
            border-color: ${themeGet('text.4', '#2C2C2C')};
        }
    }

  .social-icons{
      display: flex;
      .social-icon{
        margin-right: 12px;
        color: #665a5a;
      }
  }

  @media only screen and (max-width: 480px) {
  }
`;
export const FooterSectionWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 996px) {
    width: 100%;
  }
`;

export const FooterSearchIconsSectionWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

export const SecondaryFooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${themeGet('primary.0', '#2C2C2C')};
    padding: 10px;
    h3{
      font-size: 18px;
      line-height: 21px;
      color: #FFF;
      margin-bottom: 0px;
    }
  `;