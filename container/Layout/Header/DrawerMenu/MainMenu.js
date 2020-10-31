import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
const SocailIcons = () => {
    return (
        <>
            <div>
                <Menu className={`drawer-menu`}>
                    <Menu.Item key="0">
                        <Link href={`/`}>
                            <a><h1>Home</h1></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link href={`/`}>
                            <a> <h3>About Us</h3> </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href={`/`}>
                            <a><p>Who we are?</p></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href={`/`}>
                            <a> <p>Why us</p></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href={`/`}>
                            <a> <h3>News</h3> </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href={`/`}>
                            <a> <p>News</p></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link href={`/`}>
                            <a> <p>Events</p></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link href={`/`}>
                            <a> <h3>Carreers</h3> </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link href={`/`}>
                            <a> <p> Opportunities </p></a>
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>
            <div>
                <Menu className={`drawer-menu`}>
                    <Menu.Item key="0">
                        <Link href={`/`}>
                            <a><h1>Contact us</h1></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link href={`/`}>
                        <a><h1>Site Map</h1></a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    )
}

export default SocailIcons;


