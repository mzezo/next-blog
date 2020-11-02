import React from 'react';
import Footers from 'components/Footer/Footer';
import FooterMenu from './FooterMenu';
import SecondaryFooter from './SecondaryFooter';

const Footer = () => {
  return (
    <Footers
      menu={<FooterMenu />}
      secondaryFooter={<SecondaryFooter />}
    />
  );
};

export default Footer;
