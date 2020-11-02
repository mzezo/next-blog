import styled from 'styled-components';

// Glide wrapper style
const GlideWrapper = styled.div`
  .glide__slides {
    margin-bottom: 0;
  }
  .glide__controls {
    .glide__prev--area{
      position: absolute;
      cursor: pointer;
      top: 48%;
      left: 5%;
      @media only screen and (max-width: 762px) {
        /* left: 2%; */
        display: none;
      }
    }
    .glide__next--area {
      position: absolute;
      cursor: pointer;
      top: 48%;
      left: 90%;
      @media only screen and (max-width: 762px) {
        /* left: 88%; */
        display: none;
      }
    }
  }
`;

// Glide slide wrapper style
const GlideSlideWrapper = styled.li`
  position: relative;
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  display: inline-block;
`;


// ButtonControlWrapper style
const ButtonControlWrapper = styled.div``;

// BulletControlWrapper style
const BulletControlWrapper = styled.div``;

// BulletButton style
const BulletButton = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 4px;
  border: 0;
  padding: 0;
  outline: none;
  border-radius: 50%;
  background-color: #d6d6d6;

  &.glide__bullet{
    background-color: gray !important;
  }
  &:hover,
  &.glide__bullet--active {
    background-color: #FFF !important;
  }
`;

// default button style
const DefaultBtn = styled.button`
  cursor: pointer;
  margin: 10px 3px;
  padding: 6px 12px;

  @media only screen and (max-width: 762px) {
    padding: 3px 6px;
  }
`;

export {
  GlideSlideWrapper,
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  DefaultBtn,
};
export default GlideWrapper;
