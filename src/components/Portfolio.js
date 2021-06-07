import React from 'react';
import popvinyls from "../images/popvinyls.png"; 
import lyrically from "../images/lyrically.png"; 
import budget from "../images/budget-tracker.png"; 
import notetaker from "../images/note-taker.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'; 
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'; 
import "react-popupbox/dist/react-popupbox.css"; 
const Portfolio = () => {

    //lyrically
    const openPopupboxLyrically = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={lyrically} alt="Lyrically, a music site"/>
        <p>Group project application for the user to enter a song title and the lyrics will display in the box on the right side next to the video.</p>
        <b>Deployed URL:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://chris6661.github.io/Lyrically/")}>https://chris6661.github.io/Lyrically/</a>
        <br />
        <b>GitHub:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://github.com/chris6661/Lyrically")}>https://github.com/chris6661/Lyrically</a>

        </>
        )
        PopupboxManager.open({ 
            content,
            config: {
            titleBar: {
            enable: true, 
            text: "Lyrically"
        }, 
        fadeIn: true, 
        fadeInSpeed: 500
    }
        })
    }

  
    //notetaker
    const openPopupboxNoteTaker = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={notetaker} alt="Note taking app"/>
        <p>A simple note taking application for either taking notes down or using as a to-do list.</p>
        <b>Deployed URL:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://nameless-chamber-70517.herokuapp.com/")}>https://nameless-chamber-70517.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://github.com/chris6661/note-taker-11")}>https://github.com/chris6661/note-taker-11</a>
        </>
        )
        PopupboxManager.open({
            content, 
            config: {
             titleBar: {
            enable: true, 
            text: "Note Taking Application"
        }, 
            fadeIn: true, 
            fadeInSpeed: 500   
            }
        })
    }


    //budget tracker
    const openPopupboxBudget = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={budget} alt="Budget tracking app"/>
        <p>A PWA application for keeping track of your budget. It will track offline entries and add them to your current total, then update the total when online functionality is restored.</p>
        <b>Deployed URL:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://blooming-plateau-02534.herokuapp.com/")}>https://blooming-plateau-02534.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://github.com/chris6661/19-PWA-challenge-budget-tracker")}>https://github.com/chris6661/19-PWA-challenge-budget-tracker</a>
        </>
        )
        PopupboxManager.open({
            content, 
            config: {
            titleBar: {
            enable: true, 
            text: "Budget Tracking Application"
        }, 
            fadeIn: true, 
            fadeInSpeed: 500
            }   
        })
    }

    //netflix clone
    const openPopupboxPopVinyls = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={popvinyls} alt="E-Commerce MERN Project"/>
        <p>A full stack MERN E-Commerce application that features records for sale.</p>
        <b>Deployed URL:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://fathomless-garden-67392.herokuapp.com/")}>https://fathomless-garden-67392.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a href="/#" className="portfolio-hyper-link" onClick={() => window.open("https://github.com/chris6661/e-commerce")}>https://github.com/chris6661/e-commerce</a>
        </>
        )
        PopupboxManager.open({
            content,
            config: {
               titleBar: {
            enable: true, 
            text: "E-Commerce MERN Project"
            }, 
            fadeIn: true, 
            fadeInSpeed: 500 
            }
        })
    }

    return (
        <div className="portfolio">
       
            <div className="portfolio-info">
            <div className="container">
                <br/>
                <h1 className ="text-uppercase text-center py-5">Portfolio</h1>

                <div className = "image-box-wrapper row justify-content-center">
                
                    <div className="portfolio-image-box" onClick={openPopupboxLyrically}>
                    <img className="portfolio-image" src={lyrically} alt="Lyrically, a music site"/>        
                        <div className ="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxNoteTaker}>
                    <img className="portfolio-image" src={notetaker} alt="A note taking app"/>
                        <div className ="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    {/* <div className ="portfolio-image-box">
                    <img className="portfolio-image" src={regex} alt="Git git for email validation regex"/>
                    <div className ="overflow"></div>
                    </div> */}

                    <div className ="portfolio-image-box" onClick={openPopupboxBudget}>
                    <img className="portfolio-image" src={budget} alt="PWA budget tracker"/>
                        <div className ="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className ="portfolio-image-box" onClick={openPopupboxPopVinyls}>
                    <img className="portfolio-image" src={popvinyls} alt="MERN E-Commerce"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                        <PopupboxContainer /> 

                </div>   

            </div>
            
             </div>
         
        </div>
    
    )
}

export default Portfolio; 