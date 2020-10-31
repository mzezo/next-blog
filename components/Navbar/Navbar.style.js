import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const NavbarWrapper = styled.nav`
  display: none;
  width: 100%;
  padding: 0 75px;
  min-height: 82px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
  background-color: ${themeGet('color.3', '#008489')};
  @media only screen and (min-width: 991px) {
    display: flex;
  }

  &.is_transparent {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    border-bottom: 0;
    background-color: transparent;
    transition: all 0.3s ease-out;

    .ant-menu {
      li {
        &.ant-menu-item-selected {
          background-color: transparent;
        }
        a {
          color: ${themeGet('color.1', '#ffffff')};
          &.active {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  
  @media only screen and (min-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  max-width: 650px;
  width: 100%;

  button{
    background: transparent;
    border: none;
    margin-right: 30px;
    margin-bottom: 10px;

    &:hover {
      background: transparent;
    }

    &:active {
      background: transparent;
    }

  }
  > a {
    margin-right: 27px;
  }
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
`;



export const MenuWrapper = styled.div`
  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    li {
      /* margin: 0 14px; */
      margin: 0;
      padding: 0 15px;
      height: auto;
      margin-bottom: 0 !important;
      color: ${themeGet('text.0', '#2C2C2C')};
      font-size: 15px;
      line-height: 18px;
      font-weight: 400;
      transition: color 0.2s ease-in-out;
      @media only screen and (max-width: 1200px) {
        margin: 0 10px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
        margin-bottom: 10px;
      }
      &.ant-menu-item-selected,
      &.ant-menu-item-active {
        background-color: transparent;
      }

      a {
        display: flex;
        align-items: center;
        /* padding: 30px 16px; */
        padding: 5px 8px;
        color: ${themeGet('text.0', '#2C2C2C')};
        transition: color 0.2s ease-in-out;
        @media only screen and (max-width: 1200px) {
          padding: 30px 10px;
        }
        &:not(:nth-child(3)) {
          &:hover{
            color: ${themeGet('primary.0', '#008489')};
            background-color: ${themeGet('text.4', '#89b43e')};
            border-radius: 5px;
          }
        }
        &.active {
          font-weight: 700;
          color: ${themeGet('primary.0', '#008489')};
          border-bottom: 3px solid ${themeGet('primary.0', '#008489')};
        }
      }
    }
  }
`;



export default NavbarWrapper;
