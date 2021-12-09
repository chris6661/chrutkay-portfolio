import React from 'react';
import Type from 'react-typed'; 
// import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div id = "home" className = "header-wrapper">
            <div className = "main-info">
                <h1>Hello! My name is Chris.</h1>
                <Type
                className="typed-text"
                strings={["Full Stack Web Developer", "Let's build something together!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                {/* <Link  to = "contact"  className="btn-contact" id="nav-link" href="#">Contact Me</Link> */}
                <a href = "/#" className="btn-contact">Contact Me</a>
            </div>
        
        </div>
           
    )
}

export default Home;
