import React from 'react';
import FooterWrapper, {
    MenuWrapper,
    SecondaryFooterWrapper
  } from './Footer.style';

const Footer = ({ menu, secondaryFooter, className, path }) => {
  return (
    <>
      <FooterWrapper id="footer" className={className} >
        {menu && <MenuWrapper>{menu}</MenuWrapper>}
        {secondaryFooter && <SecondaryFooterWrapper> {secondaryFooter} </SecondaryFooterWrapper>}
      </FooterWrapper>
    </>
  );
};

export default Footer;