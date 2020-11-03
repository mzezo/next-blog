import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CategroySearchWrapper = styled.div`
  display: flex;
  align-items: center;

  .view_with__popup {
    margin-right: 45px;
    &:last-child {
      margin-right: 0;
    }
  }



  /* Date Picker Style */
  .ant-picker-large {
    min-width: 180px;
    /* min-height: 55px; */
    //.ant-picker {
      /* padding: 6.5px 32px 6.5px 12px; */
      .ant-picker-input{
          /* min-height: 45px; */
          .ant-picker-suffix {
              /* margin-left: 55px; */
              color: ${themeGet('text.4', '#2C2C2C')};
              .anticon svg {
                  font-size: 20px;
              }
          }
      }
    //}
  }

  /* Select Style */
  .ant-select-lg {
    max-width: 180px;
    min-width: 180px;
    /* min-height: 55px; */
  }

    /* Search Box Style */
    .ant-input-group-wrapper {
        width: 420px;
        .ant-btn-primary {
            background: ${themeGet('text.4', '#2C2C2C')};
            border-color: ${themeGet('text.4', '#2C2C2C')};
        }
    }

`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h5{
    display: flex;
    align-items: center;
    margin-top: 35px;
    font-size: 20px;
    color: ${themeGet('text.4', '#2C2C2C')};
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ActionWrapper = styled.div`
  overflow: hidden;
  margin-top: 27px;

  .ant-btn {
    border: 0;
    padding: 0;
    height: auto;
    box-shadow: none;
    font-weight: 600;
    border-radius: 0;
    text-shadow: none;
    color: ${themeGet('text.2', '#777777')};
    border-bottom: 1px solid transparent;
    &:hover {
      color: ${themeGet('text.1', '#909090')};
      border-bottom-color: ${themeGet('text.1', '#909090')};
    }
    &:focus {
      outline: none;
    }

    &.ant-btn-primary {
      float: right;
      border-color: transparent;
      background-color: transparent;
      color: ${themeGet('primary.0', '#008489')};
      &:hover {
        color: ${themeGet('primary.1', '#399C9F')};
        border-bottom-color: ${themeGet('primary.1', '#399C9F')};
      }
    }
    &::after {
      display: none;
    }
    &:not([disabled]):hover {
      text-decoration: underline;
    }
  }
`;

export default CategroySearchWrapper;