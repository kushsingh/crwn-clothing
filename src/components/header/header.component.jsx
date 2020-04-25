import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.style.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>   
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact Us
            </Link>
        </div>
    </div>
)

export default Header;