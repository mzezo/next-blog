import React from 'react'
import { Drawer, Button } from 'antd';
import { DrawerMenuWrapper, DrawerMenuContentWrapper,  LogoArea, DrawerMenuSectionsWrapper, SocialIconsWrapper, MenuWrapper } from './DrawerMenu.style';
import Logo from 'components/UI/Logo/Logo';
import SocialIcons from './SocailIcons';
import MainMenu from './MainMenu';
import linkDevLogo from 'assets/images/LogoWhite.png';
import { CloseOutlined  } from '@ant-design/icons'
const DrawerMenu = ({showDrawer, closeDrawerCallback}) => {
    return (
        <DrawerMenuWrapper>
            <Drawer
                placement="left"
                width={450}
                closable={false}
                onClose={closeDrawerCallback}
                className="mobile-header"
                visible={showDrawer}
                mask={false}
            >
                <DrawerMenuContentWrapper>
                    <LogoArea>
                        <Button onClick={closeDrawerCallback}> 
                            <CloseOutlined style={{ fontSize: '24px',color: '#FFF', marginRight: '30px'}}/>
                        </Button>
                        <Logo withLink linkTo="/" src={linkDevLogo} />
                    </LogoArea>
                    <DrawerMenuSectionsWrapper>
                        <SocialIconsWrapper>
                            <SocialIcons />
                        </SocialIconsWrapper>
                        <MenuWrapper>
                            <MainMenu />
                        </MenuWrapper>
                    </DrawerMenuSectionsWrapper>
                </DrawerMenuContentWrapper>

            </Drawer>
        </DrawerMenuWrapper>
    )
}

export default DrawerMenu;
