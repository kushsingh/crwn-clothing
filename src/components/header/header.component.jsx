import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is higher order component

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>   
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className="option" to="/signin">
                    SIGN IN                
                </Link>  
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropDown />}
    </div>
)

// this naming can be anything bit mapStateToProps is standard with redux codebases
const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);