import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper, {
  Container,
  LogoArea,
  MenuArea,
  MenuWrapper,
} from './Navbar.style';

const Navbar = ({
  className,
  logo,
  navMenu,
  isLogin,
  headerType,
  searchVisibility,
}) => {
  const addAllClasses = ['navbar'];
  if (className) {
    addAllClasses.push(className);
  }
  if (headerType) {
    addAllClasses.push(`is_${headerType}`);
  }

  return (
    <NavbarWrapper className={addAllClasses.join(' ')}>
      <Container>
        {logo || searchVisibility ? (
          <LogoArea>
            {logo}
          </LogoArea>
        ) : null}
        <MenuArea>
          {navMenu && (
            <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>
          )}
        </MenuArea>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  navMenu: PropTypes.element,
  avatar: PropTypes.element,
  authMenu: PropTypes.element,
  isLogin: PropTypes.bool,
  headerType: PropTypes.oneOf(['transparent', 'default']),
};

export default Navbar;
