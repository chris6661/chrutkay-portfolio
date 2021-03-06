import React from 'react'
import Type from 'react-typed'; 
const Header = () => {
    return (
        <div id = 'home' className = "header-wrapper">
            <div className = "main-info">
                <h1>My name is Chris Hrutkay.</h1>
                <Type
                className="typed-text"
                strings={["Web Development", "Professional Shark Wrangler", "Tamer Of Lions"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href= '#contact' className="btn-contact"> Contact Me </a>
            </div>
        </div>
    )
}

export default Header;
