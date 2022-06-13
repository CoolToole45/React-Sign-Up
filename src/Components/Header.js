import React from 'react';
import logo from '../Img/Little Wizzard Guy 2.0.png';
import '../Styles/Header.css';

export default function Header() {
    return (
        <header>
            <img 
                src={logo}
                alt='logo'
                className='logo'
            />
            <div>
                <h1>Welcome To React Sign-Up</h1>
                <p>Here you can sign up to recieve services</p>
            </div>
        </header>
    )
}