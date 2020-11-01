import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import Logo from 'components/UI/Logo/Logo';
// import Text from 'components/UI/Text/Text';
import { Button, Drawer } from 'antd';
import Navbar from 'components/Navbar/Navbar';
import HeaderWrapper, {
  MobileNavbar,
  LogoArea,
} from './Header.style';
import linkDevLogo from 'assets/images/LogoWhite.png';
import { MenuAltLeft, MenuAltRight } from '@styled-icons/boxicons-regular';

const MainMenu = dynamic(() => import('./MainMenu'));
const DrawerMenu = dynamic(() => import('./DrawerMenu/DrawerMenu'));
// const MobileMenu = dynamic(() => import('./MobileMenu'));
// const NavbarSearch = dynamic(() => import('./NavbarSearch'));

const Header = ({ router }) => {

const [showDrawerMenu, setShowDrawerMenu] = useState(false);


const handleShowDrawerMenu = () => {
  window.scrollTo({ top: 20, behavior: "smooth" });
  setShowDrawerMenu((showDrawerMenu) => !showDrawerMenu);
}

  const headerType = router.pathname === '/' ? 'transparent' : 'default';

  return (
    <HeaderWrapper>
      <Sticky top={0} innerZ={1001} activeClass="isHeaderSticky">
        <Navbar
          logo={
            <>
              <Button onClick={handleShowDrawerMenu}> 
                  <MenuAltLeft size={32} style={{color: '#FFF'}}/>
              </Button>
              <DrawerMenu showDrawer={showDrawerMenu} closeDrawerCallback={handleShowDrawerMenu}/>
              <Logo withLink linkTo="/" src={linkDevLogo} />
            </>
          }
          navMenu={<MainMenu />}
          headerType={headerType}
          location={router}
        />
       <MobileNavbar className={headerType}>
          <LogoArea>
            <>
              <Logo withLink linkTo="/" src={linkDevLogo} />
            </>
          </LogoArea>
          <Button className={`hamburg-btn`}onClick={handleShowDrawerMenu}> 
            <MenuAltRight size={32} style={{color: '#FFF'}}/>
          </Button>
        </MobileNavbar> 
      </Sticky>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
