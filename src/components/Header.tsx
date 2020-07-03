import * as React from 'react';
import image from '../img/logo.jpg';

const Header:React.FC=()=>{
    return (
        <header className="center">
            <img src={image} alt=""/>
        </header>
    )
}

export default Header;