import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 15px;
        padding-right: 15px;
      `) ||
    css`
      padding-left: 85px;
      padding-right: 85px;

      @media only screen and (max-width: 480px) {
        padding-left: 25px;
        padding-right: 25px;
      }
    `};

  ${(props) =>
    props.fluid &&
    css`
      width: 100% !important;
      max-width: 1920px !important;
      @media only screen and (min-width: 1441px) {
        padding-left: 85px;
        padding-right: 85px;
      }
    `}

  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }

  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 1050px;
    width: 100%;
  }

  @media (min-width: 1400px) {
    max-width: 1250px;
    width: 100%;
  }
`;

export default ContainerWrapper;
