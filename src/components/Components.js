import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from 'react'; 
import Navapp from './components/Navapp'; 
// import Header from './components/Header'; 
import Home from './components/Home'; 
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
 
const Components = () => {

    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = (currentPage) => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
        // YOUR CODE HERE
        switch(currentPage) {
    
           case 'About':
            return <AboutMe /> 
    
          case 'Skills':
            return <Skills /> 
    
          case 'Experience':
            return <Experience /> 
            
        case 'Portfolio':
            return <Portfolio /> 

            case 'Contact':
            return <Contact /> 

          default:
           return <Home/>; 
        }
      };

      return (
        <div>
          <Navapp currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            {
              // Render the component returned by 'renderPage()'
              // YOUR CODE HERE
              renderPage(currentPage)
            }
          </div>
        </div>
      );
}

export default Components; 