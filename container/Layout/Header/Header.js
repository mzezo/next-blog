import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
// import { IoIosClose } from 'react-icons/io';
import Logo from 'components/UI/Logo/Logo';
// import Text from 'components/UI/Text/Text';
import { Button, Drawer } from 'antd';
import Navbar from 'components/Navbar/Navbar';
// import { LayoutContext } from 'context/LayoutProvider';
// import { AuthContext } from 'context/AuthProvider';
import HeaderWrapper, {
  MobileNavbar,
  CloseDrawer,
  AvatarWrapper,
  AvatarImage,
  AvatarInfo,
  LogoArea,
} from './Header.style';
import linkDevLogo from 'assets/images/LogoWhite.png';
import { MenuAltLeft } from '@styled-icons/boxicons-regular';

// const AuthMenu = dynamic(() => import('./AuthMenu'));
const MainMenu = dynamic(() => import('./MainMenu'));
const DrawerMenu = dynamic(() => import('./DrawerMenu/DrawerMenu'));
// const MobileMenu = dynamic(() => import('./MobileMenu'));
// const ProfileMenu = dynamic(() => import('./ProfileMenu'));
// const NavbarSearch = dynamic(() => import('./NavbarSearch'));

const Header = ({ router }) => {
//   const { loggedIn } = useContext(AuthContext);
//   const [{ searchVisibility }] = useContext(LayoutContext);

const [state, setState] = useState(false);
const [showDrawerMenu, setShowDrawerMenu] = useState(false);

const sidebarHandler = () => {
  setState((state) => !state);
};

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
        {/* <MobileNavbar className={headerType}>
          <LogoArea>
            <>
              {headerType === 'transparent' && <LogoIcon />}
              <Logo withLink linkTo="/" src={tripFinder} title="TripFinder." />
            </>
            <NavbarSearch />
          </LogoArea>
          <Button
            className={`hamburg-btn ${state ? 'active' : ''}`}
            onClick={sidebarHandler}
          >
            <span />
            <span />
            <span />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={sidebarHandler}
            width="285px"
            className="mobile-header"
            visible={state}
          >
            <CloseDrawer>
              <button onClick={sidebarHandler}>
                {/* <IoIosClose /> 
              </button>
            </CloseDrawer>
            {/* {loggedIn ? ( 
              <AvatarWrapper>
                <AvatarImage>
                  <Logo src={AvatarImg} />
                </AvatarImage>
                <AvatarInfo>
                  <Text as="h3" content="Nova Scotia" />
                  <Link href={AGENT_PROFILE_PAGE}>
                    <a>View Profile</a>
                  </Link>
                </AvatarInfo>
              </AvatarWrapper>
            ) : ( 
              <AuthMenu className="auth-menu" />
            )}
            <MobileMenu className="main-menu" />
          </Drawer>
        </MobileNavbar> */}
      </Sticky>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
