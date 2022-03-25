import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                </nav>
        </div>
    );
};

export default Header;