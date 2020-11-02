import React from 'react';
import FooterWrapper, {
    MenuWrapper,
    SecondaryFooterWrapper
  } from './Footer.style';

const Footer = ({ menu, secondaryFooter, className, path }) => {
  console.log('SecondaryFooter', secondaryFooter)
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