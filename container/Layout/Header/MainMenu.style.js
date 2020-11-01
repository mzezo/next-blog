import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SearchWrapper = styled.div`
  margin-bottom: 8px;
  transition: all 0.3s ease;
  .ant-input {
    background-color: rgba(0,0,0,0.2);
    border: none;
    padding: 8px 12px;
    /* border-radius: 4px; */
    width: 275px !important;
  }

  .ant-input-group-addon {
    background-color: rgba(0,0,0,0.2);
  }

  .ant-btn {
    background-color: transparent;
    border: none;
  }

  .anticon svg {
    display: inline-block;
    font-size: 24px;
    color: #FFF;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon {
    left: 0px;
    padding: 0px 15px;
    border: 0;
  }

  .ant-menu-item .anticon, .ant-menu-submenu-title .anticon {
    min-width: 14px;
    margin-right: 0px;
  }
`;

export const SettingsWrapper = styled.div`
  /* margin-left: 46px; */

  .avatar-dropdown {
    position: relative;


    .divider{
      width: 100%;
      height: 1px;
      margin-bottom: 4px;
      margin-top: 4px;
      background: #ebebeb;
    }

    .anticon svg {
      display: inline-block;
      font-size: 24px;
    }

    .dropdown-handler {
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .dropdown-menu {
      min-width: 180px;
      border-right: 0;
      position: absolute;
      right: 0;
      top: 45px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      background-color: #FFF;
      display: block;
      &.notifications{
        min-width: 260px !important;
      }
      &.hide {
        opacity: 0;
        visibility: hidden;
      }
      &.active {
        opacity: 1;
        visibility: visible;
      }
      li {
        color: ${themeGet('color.1', '#ffffff')};
        font-size: 15px;
        line-height: 18px;
        font-weight: 400;
        height: auto;
        padding: 0;
        margin: 0 6px;
        transition: color 0.2s ease-in-out;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        &:first-child {
            margin: 0 6px;
            margin-top: 10px;
            color: ${themeGet('text.3', '#b9b7b7')} !important;
        }
        &:last-child {
            margin-bottom: 10px !important;
        }
        a {
          display: flex;
          align-items: center;
          padding: 4px 6px;
          color: ${themeGet('text.0', '#2C2C2C')};;
          transition: color 0.2s ease-in-out;
          &:hover {
            color: ${themeGet('primary.0', '#008489')};
            background-color: ${themeGet('text.4', '#89b43e')} ;
          }
          &.active {
            font-weight: 700;
            color: ${themeGet('primary.0', '#008489')};
          }
          span{
            font-size: 32px; 
            margin-right: 10px;

            &.colored{
                font-size: 28px; 
                color: ${themeGet('text.4', '#89b43e')} !important;
            }
            &.colored-link{
                font-size: 15px; 
                color: ${themeGet('text.4', '#89b43e')} !important;
            }

            &.colored-link-Notifications{
                font-size: 15px; 
                color: ${themeGet('text.4', '#89b43e')} !important;
                margin-left: 20%;
            }
            &.sized{
                font-size: 22px; 
            }
          }
        }

        p{
            display: block;
            padding: 4px 6px;
            margin-bottom: 0px;
            margin-top: 0px;
            color: ${themeGet('text.3', '#b9b7b7')} !important;
            transition: color 0.2s ease-in-out;
            &:hover {
                color: ${themeGet('primary.0', '#008489')};
            }
        }
        
        }
        button {
          padding: 0;
          border: 0;
          cursor: pointer;
          padding: 8px 16px;
          width: 100%;
          text-align: left;
          background-color: transparent;
          transition: color 0.2s ease-in-out;
          &:hover {
            color: ${themeGet('primary.0', '#008489')};
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
`;