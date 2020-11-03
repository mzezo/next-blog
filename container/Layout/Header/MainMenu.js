import React, { useState } from 'react';
import { withRouter } from 'next/router';
import { Menu } from 'antd';
import Link from 'next/link';
import { SettingsWrapper, SearchWrapper} from './MainMenu.style';
import { Divider } from 'antd';
import { SettingOutlined, BellOutlined, SearchOutlined   } from '@ant-design/icons';
import { ArrowRight } from "@styled-icons/bootstrap";
import { Avatar, Badge, Input  } from 'antd';

const { Search } = Input;

const MainMenu = ({ className, router }) => {

    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);
    const [searchBox, setSearchBox] = useState(false);

    const showSettingDropdown = () => {
        setSettingsDropdown(!settingsDropdown);
    };

    const showNotificationDropdown = () => {
        setNotificationsDropdown(!notificationsDropdown);
    };

    const closeDropdown = () => {
        setSettingsDropdown(false);
    };

    const closeNotificationDropdown = () => {
        setSettingsDropdown(false);
    };

    const showSearchBox = () => {
        setSearchBox(true);
    }
    const onSearch = (value) => {
    }


    return (
        <Menu className={className}>
            <Menu.Item key="0" onClick={showSearchBox}>
                <Link href={`/`}>
                    <a>
                    { !searchBox &&<SearchOutlined style={{fontSize: '24px'}}/> }
                    </a>
                </Link>
                {
                    searchBox &&
                    <SearchWrapper>
                        <Search placeholder=" search " onSearch={onSearch}  />
                    </SearchWrapper>
                }
                    
            </Menu.Item>
            <SettingsWrapper>
                <div className="avatar-dropdown" onClick={showNotificationDropdown} >
                    <Menu.Item key="1">
                        <Link href={`/`}>
                            <a> <BellOutlined /></a>
                        </Link>
                    </Menu.Item>
                    <Menu className={`dropdown-menu notifications ${notificationsDropdown ? 'active' : 'hide'}`}>
                        <Menu.Item onClick={closeNotificationDropdown} key="0">
                            <Link href={`/`}>
                                <p>Recent Notifications</p>
                            </Link>
                        </Menu.Item>
                        <Menu.Item onClick={closeNotificationDropdown} key="1">
                            <Link href={`/`}>
                                <a>You have an upcoming appointment today! <span className="colored-link">Check it Now</span></a>
                            </Link>
                        </Menu.Item>
                        <Divider className="divider" />
                        <Menu.Item onClick={closeNotificationDropdown} key="2">
                            <Link href={`/`}>
                                <a>Rate your last service</a>
                            </Link>
                        </Menu.Item>
                        <Divider className="divider" />
                        <Menu.Item key="3">
                            <Link href={`/`}>
                                <a> Your payment request has been approved</a>
                            </Link>
                        </Menu.Item>
                        <Divider className="divider" />
                        <Menu.Item key="4">
                            <Link href={`/`}>
                                <a> <span className="colored-link-Notifications">All Notifications <ArrowRight size={22}/></span> </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </SettingsWrapper>
            <Menu.Item key="2">
                <Link href={`/`}>
                    <a> <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?cs=srgb&dl=pexels-chloe-kala-1043473.jpg&fm=jpg" style={{width: '35px', height: '35px', marginRight: '10px', borderRadius: '50%'}} className="user-avatar" />Mohamed</a>
                </Link>
            </Menu.Item>
            <SettingsWrapper>
                <div className="avatar-dropdown" onClick={showSettingDropdown} >
                    <Menu.Item key="3">
                        <Link href={`/`}>
                            <a><SettingOutlined /></a>
                        </Link>
                    </Menu.Item>
                    <Menu className={`dropdown-menu ${settingsDropdown ? 'active' : 'hide'}`}>
                        <Menu.Item onClick={closeDropdown} key="0">
                            <Link href={`/`}>
                                <p>Language</p>
                            </Link>
                        </Menu.Item>
                        <Menu.Item onClick={closeDropdown} key="1">
                            <Link href={`/`}>
                                <a>English</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item onClick={closeDropdown} key="2">
                            <Link href={`/`}>
                                <a>اللغة العربية</a>
                            </Link>
                        </Menu.Item>
                        <Divider className="divider" />
                        <Menu.Item key="3">
                            <Link href={`/`}>

                                <p> Font Size</p>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link href={`/`}>
                                <a> <span>A</span> <span className="colored">A</span> <span className="sized">A</span> </a>
                            </Link>
                        </Menu.Item>
                        <Divider className="divider" />
                        <Menu.Item key="5">
                            <Link href={`/`}>
                                <p> Account </p>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link href={`/`}>
                                <a> Sign out </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </SettingsWrapper>
        </Menu>
    );
};

export default withRouter(MainMenu);
