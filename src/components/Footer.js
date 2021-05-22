import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton, 
    TwitterIcon, 
    LinkedinShareButton, 
    LinkedinIcon
} from 'react-share'; 
import Git from "../images/GitHub-Mark-Light-32px.png"

const Footer = () => {
    return (
        <div className = 'footer-wrapper'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-lg-4 col-md-6 col-sm-6'>
                        <div className = 'd-flex'>
                            <p>Austin, Texas</p>
                        </div>
                        <div className = 'd-flex'>
                            <a href = '412-915-4046'>+14129154046</a>
                        </div>
                        <div className = 'd-flex'>
                            <p>chrutkay90@gmail.com</p>
                        </div>
                    </div>
                    <div className = "col-lg-3 col-md-2 col-sm-6">
                        <div className = 'row'>
                            <div className = 'col'>
                                <a href={'/'}className = 'footer-nav'>Home</a>
                                <br/>
                                <a href={'about'}className = 'footer-nav'>About Me</a>
                                <br/>
                                {/* <a href={'skills'}className = 'footer-nav'>Skills</a> */}
                            </div>

                            <div className = 'col'>
                                <a href={'portfolio'}className = 'footer-nav'>Portfolio</a>
                                <br/>
                                <a href={'resume'}className = "footer-nav">Resume </a>
                                <br/>
                                <a href={'contact'}className = 'footer-nav'>Contact</a>
                                {/* <a href={'Experience'} className = 'footer-nav'>Experience</a> */}
                                <br/>
                                
                            </div>

                        </div>
                    </div>
                
                <div className = 'col-lg-5 col-md-5 col-sm-6 align-items-center'>
                    <div className = 'd-flex justify-content-center'>
                        
                        {/*GitHub*/}
                                              
                        <FacebookShareButton
                        
                            >    
                           <img src={Git} alt="GitHub" className = 'mx-3 git' size = {36} onClick={() => window.open("https://github.com/chris6661")}/>
                        </FacebookShareButton>

                        {/*Linkedin*/}
                        <LinkedinShareButton
                        // url = {/*put portfolio url here */}
                        >    
                            <LinkedinIcon className = 'mx-3' size = {36} onClick={() => window.open("https://www.linkedin.com/in/christopher-hrutkay/")} />
                            
                       </LinkedinShareButton>

                        {/* twitter */}
                        <TwitterShareButton
                        // url = {/*put portfolio url here */}
                        >    
                            <TwitterIcon className = 'mx-3' size = {36} onClick={() => window.open("https://twitter.com/ChrisHrutkay")}/>
                        </TwitterShareButton>
                        
                    </div>
                    <p className = 'pt-3 text-center'>
                        Copyright&copy; 
                        {new Date().getFullYear()}&nbsp; All Rights Reserved
                    </p>
                </div>
            </div>      
        </div>
    </div>
   
    )
}

export default Footer;
