import React from 'react'
import netflix from '../images/netflix.png'; 
import galaxy1 from '../images/galaxy1.jpg'; 
import lyrically from '../images/lyrically.png'; 
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'; 
//react popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'; 
import 'react-popupbox/dist/react-popupbox.css'; 

const Portfolio = () => {

    //netflix
    const openPopupboxNetflix = () => {
        const content = (
        <>
        <img className='portfolio-image-popupbox' src={netflix} alt='Netflix clone project'/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className='hyper-link' onClick = {() => window.open("https://elated-ritchie-537ddc.netlify.app", '_blank')}>"https://elated-ritchie-537ddc.netlify.app"</a>
        <br/>
        <b>GitHub:</b> <a className='hyper-link' onClick = {() => window.open("https://github.com/chris6661/netflix-clone-1")}>'https://github.com/chris6661/netflix-clone-1'</a>

        </>
        )
        PopupboxManager.open({content})
        
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true, 
            text: 'Netflix Clone'
        }, 
        fadeIn: true, 
        fadeInSpeed: 500
    }

    //project 2
    const openPopupboxGalaxy1 = () => {
        const content = (
        <>
        <img className='portfolio-image-popupbox' src={galaxy1} alt='Project 2 placeholder'/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        {/* keep netflix clone url for now and replace after you have next project in and ready to go */}
        <b>Demo:</b> <a className='hyper-link' onClick = {() => window.open("https://elated-ritchie-537ddc.netlify.app", '_blank')}>"https://elated-ritchie-537ddc.netlify.app"</a>
        <br />
        <b>GitHub:</b> <a className='hyper-link' onClick = {() => window.open("https://github.com/chris6661/netflix-clone-1")}>'https://github.com/chris6661/netflix-clone-1'</a>
        </>
        )
        PopupboxManager.open({content})
        
    }

    const popupboxConfigGalaxy1 = {
        titleBar: {
            enable: true, 
            text: 'Project 2 Placeholder'
        }, 
        fadeIn: true, 
        fadeInSpeed: 500
    }

    const openPopupboxLyrically = () => {
        const content = (
        <>
        <img className='portfolio-image-popupbox' src={lyrically} alt='API project to watch music video and read lyrics simultaneously'/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        {/* keep netflix clone url for now and replace after you have next project in and ready to go */}
        <b>Demo:</b> <a className='hyper-link' onClick = {() => window.open("https://chris6661.github.io/Lyrically/")}>chris6661.github.io/lyrically/</a>
        <br />
        <b>GitHub:</b> <a className='hyper-link' onClick = {() => window.open("https://github.com/chris6661/Lyrically")}>'https://github.com/chris6661/Lyrically'</a>
        </>
        )
        PopupboxManager.open({content})
        
    }

    const popupboxConfigLyrically = {
        titleBar: {
            enable: true, 
            text: 'Lyrically'
        }, 
        fadeIn: true, 
        fadeInSpeed: 500
    }

    return (
        <div id = 'portfolio' className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
                        <img className='portfolio-image' src= {netflix} alt='Netflix Clone Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}
                    <div className='portfolio-image-box' onClick={openPopupboxGalaxy1}>
                        <img className='portfolio-image' src= {galaxy1} alt='Project placeholder image'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}
                    <div className='portfolio-image-box' onClick={openPopupboxLyrically}>
                        <img className='portfolio-image' src= {lyrically} alt='Lyrically API group project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}               
                  
                </div>
            </div>     
                  
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigGalaxy1} />
            <PopupboxContainer {...popupboxConfigLyrically} />

        </div>
    )
}

export default Portfolio; 
