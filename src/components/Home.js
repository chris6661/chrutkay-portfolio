import React from 'react'
import Type from 'react-typed'; 
const Home = () => {
    return (
        <div id = 'home' className = "header-wrapper">
            <div className = "main-info">
                <h1>Hi! I'm Chris.</h1>
                <Type
                className="typed-text"
                strings={["Full Stack Web Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href= {'contact'} className="btn-contact"> Contact Me </a>
            </div>
        
        </div>
           
    )
}

export default Home;
