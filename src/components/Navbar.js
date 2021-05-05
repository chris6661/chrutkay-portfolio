import React from 'react'
import {Link} from 'react-router-dom';
//REACTFONT awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className='container'>
        <a className="navbar-brand" href="#"> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff'}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
              <Link smooth = {true} to = "/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to = "/about" offset = {-110} className="nav-link" >About Me</Link>
            </li>
            
            <li className="nav-item">
              <Link smooth = {true} to = "skills" offset = {-110} className="nav-link" href="#">What I Do</Link>
            </li>

            <li className="nav-item">
              <Link smooth = {true} to = "experience" offset = {-110} className="nav-link" href="#">Experience</Link>
            </li>

            <li className="nav-item">
              <Link smooth = {true} to = "portfolio" offset = {-110} className="nav-link" href="#">Portfolio</Link>
            </li>
           
            <li className="nav-item">
              <Link smooth = {true} to = "contact" offset = {-110} className="nav-link" href="#">Contact Me</Link>
            </li>

          </ul>
          
        </div>
        </div>
      </nav>
    )
}

export default Navbar


//can put picture or some logo where navbar was line 6, path it right