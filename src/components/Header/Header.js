import React from 'react';
import './Header.css'
import img from '../../image/pumpkart-logo.jpg'
const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/inventory">Inventory</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;