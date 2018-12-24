import React from 'react';
import Header from './common_template/header';
import Sidebar from './common_template/sidebar';
import MenuMobile from './common_template/menu';
import Messages from './../common/messages/messages';

export default props => (
    <div>
        <div id="wrapper" className="dashboard">
            <Header />
                {props.children}
            <Sidebar />
        </div>
        <MenuMobile idName="menu" />
        <Messages />
    </div>
)