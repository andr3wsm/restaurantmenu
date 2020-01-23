import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
export class MyTopBar extends Component {
    render() {
        return (
            <div className="MyTopBar">
                <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home"></Icon>
                    <a href="/home">Home Page</a>
                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="appstore"></Icon>
                    <a href="/about">About Page</a>
                </Menu.Item>
                </Menu>
            </div>
        )
    }
};