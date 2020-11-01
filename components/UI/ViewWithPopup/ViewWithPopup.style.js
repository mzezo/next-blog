import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: ${props => (props.radius ? props.radius : 3)}px;
  ${props =>
    props.showPopup &&
    css`
      /* box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16); */
      position: absolute;
      width: 100%;
      /* z-index: 999; */
      min-width: 200px;
      /* padding: 30px; */
      background-color: #ffffff;
    `}

  .date_picker {
    margin-bottom: 0;

    .DateRangePicker {
      .DateRangePickerInput {
        border-radius: 3px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
