import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ListingWrapper = styled.div`
  position: relative;
  background-color: #f2f2f2;
  margin-top: -30px;
  /* date picker component style */
  .DateRangePicker {
    .DateRangePickerInput {
      .DateInput {
        .DateInput_input {
          &.DateInput_input__focused {
            border-bottom: 0;
          }
        }
        .DateInput_fang {
          top: 40px !important;
        }
      }
    }
  }

  /* toolbar area style */
  .toolbar {
    /* padding-left: 95px;
    padding-right: 30px; */
    margin-top: 40px;
    margin-bottom: 40px;
    /* border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')}; */
    @media only screen and (min-width: 1441px) {
      min-height: 78px;
    }
  }

  /* load more wrapper style */
  .loadmore_wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
    > button {
      border: 0;
      min-width: 135px;
      height: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      font-size: 15px;
      font-weight: 700;
      border-radius: 3px;
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
      transition: all 0.3s ease;
      &:hover {
        outline: none;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export default ListingWrapper;
