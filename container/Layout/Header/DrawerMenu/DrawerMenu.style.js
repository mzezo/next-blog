import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const DrawerMenuWrapper = styled.div`
    
`;

export const DrawerMenuContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const LogoArea = styled.div`
    padding-left: 75px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    border-bottom: 0.2px solid #f0f0f0;
    button{
        background: transparent;
        border: none;

        &:hover {
            background: transparent;
        }

        &:active {
            background: transparent;
        }
    }

`;

export const DrawerMenuSectionsWrapper = styled.div`
    display: flex;
    height: 100%;
`;

export const SocialIconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 35px;

    .social-icon{
        padding: 10px;
        color: #FFF;
    }
`;


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 35px;

    .ant-menu-vertical{
        border-right: 0;
    }
    .drawer-menu{
        background-color: transparent;
        
        li{
            font-size: 15px;
            line-height: 18px;
            font-weight: 400;
            height: auto;
            padding: 0;
            transition: color 0.2s ease-in-out;
            &.ant-menu-item-selected,
            &.ant-menu-item-active {
                background-color: transparent;
            }
            a{
                color: ${themeGet('color.1', '#FFF')} !important;
                transition: color 0.2s ease-in-out;
                &:hover {
                    color: ${themeGet('text.4', '#89b43e')};
                }
                &:active {
                    font-weight: 700;
                    color: ${themeGet('text.4', '#89b43e')};
                }
                h1{
                    font-size: 22px;
                    line-height: 25px;
                    font-weight: 700;
                    color: ${themeGet('color.1', '#FFF')};
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                h3{
                    font-size: 20px;
                    line-height: 23px;
                    font-weight: 600;
                    color: ${themeGet('color.1', '#FFF')};
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                p{
                    font-size: 18px;
                    line-height: 21px;
                    margin-bottom: 5px;
                    color: #cfcfcf;

                }
            }
        }
    }
`;