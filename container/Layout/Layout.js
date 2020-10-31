import React from 'react';
import { withRouter } from 'next/router';
import { Layout as LayoutWrapper } from 'antd';
import Header from './Header/Header';
// import Footer from './Footer/Footer';

const { Content } = LayoutWrapper;

const Layout = ({ children, router }) => {
  return (
    <LayoutWrapper>
        <>
            <Header />

            <Content>{children}</Content>
           
            {/* <Footer path={router.pathname === SINGLE_POST_PAGE} /> */}
        </>
    </LayoutWrapper>
  );
};

export default withRouter(Layout);
