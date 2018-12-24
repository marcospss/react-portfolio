import React from 'react';
import Header from './../common_template/header';
import Projects from './projects';
import Sidebar from './../common_template/sidebar';

export default props => (
    <div id="wrapper">
        <Header />
        <main role="main" id="main">
            <Projects />
        </main>
        <Sidebar />
    </div>
);