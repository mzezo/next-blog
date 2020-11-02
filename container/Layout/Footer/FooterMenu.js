import React from 'react';
import { FooterMenuWrapper, FooterSectionWrapper, FooterSearchIconsSectionWrapper } from './Footer.style';
import { Instagram, Youtube, LinkedinSquare, Facebook, Twitter } from '@styled-icons/boxicons-logos';
import { Input } from 'antd';

const { Search } = Input;

const FooterMenu = () => {

    const onSearch = value => console.log(value);

    return (
        <>
            <FooterSectionWrapper>
                <FooterMenuWrapper>
                    <h5>News</h5>
                    <h5>Events</h5>
                    <h5>About</h5>
                    <h5>Faqs</h5>
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <h5>Privacy Policy</h5>
                    <h5>Contact us</h5>
                    <h5>Complaind</h5>
                </FooterMenuWrapper>
            </FooterSectionWrapper>
            <FooterSearchIconsSectionWrapper>
                <FooterMenuWrapper>
                    <h5>Subscripe to Newsletter</h5>
                    <Search
                        placeholder="Email Address"
                        enterButton="Subscribe"
                        size="large"
                        onSearch={onSearch}
                    />
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <h5>Follow us</h5>
                    <div className="social-icons">
                        <div className="social-icon">
                            <Instagram size={28} />
                        </div>
                        <div className="social-icon">
                            <Youtube size={28} />
                        </div>
                        <div className="social-icon">
                            <LinkedinSquare size={28} />
                        </div>
                        <div className="social-icon">
                            <Facebook size={28} />
                        </div>
                        <div className="social-icon">
                            <Twitter size={28} />
                        </div>
                    </div>
                </FooterMenuWrapper>
            </FooterSearchIconsSectionWrapper>
        </>
    );
};

export default FooterMenu;
