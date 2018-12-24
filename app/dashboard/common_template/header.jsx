import React from 'react';
import Menu from './menu';

export default props => (
    <header id="header">
        <h1><a href="#dashboard">Future Imperfect</a></h1>
        <nav className="main">
            <ul>
                <li className="search">
                    <a className="fa-search" href="#search">Search</a>
                    <form id="search" method="get" action="#search">
                        <input type="text" name="q" placeholder="Search" />
                    </form>
                </li>
                <li className="menu">
                    <a className="fa-bars" href="#menu">Menu</a>
                </li>
            </ul>
        </nav>
    </header>
);