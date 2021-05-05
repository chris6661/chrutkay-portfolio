import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton, 
    TwitterIcon, 
    LinkedinShareButton, 
    LinkedinIcon
} from 'react-share'; 


const Footer = () => {
    return (
        <div className = 'footer'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-lg-4 col-md-6 col-sm-6'>
                        <div className = 'd-flex'>
                            <p>Austin, Texas</p>
                        </div>
                        <div className = 'd-flex'>
                            <a href = '555-555-5555'>+1555-555-5555</a>
                        </div>
                        <div className = 'd-flex'>
                            <p>chrutkay90@gmail.com</p>
                        </div>
                    </div>
                    <div className = "col-lg-3 col-md-2 col-sm-6">
                        <div className = 'row'>
                            <div className = 'col'>
                                <a className = 'footer-nav'>Home</a>
                                <br/>
                                <a className = 'footer-nav'>About Me</a>
                                <br/>
                                <a className = 'footer-nav'>Skills</a>
                            </div>

                            <div className = 'col'>
                                <a className = 'footer-nav'>Experience</a>
                                <br/>
                                <a className = 'footer-nav'>Portfolio</a>
                                <br/>
                                <a className = 'footer-nav'>Contact</a>
                            </div>

                        </div>
                    </div>
                
                <div className = 'col-lg-5 col-md-5 col-sm-6 align-items-center'>
                    <div className = 'd-flex justify-content-center'>
                        
                        {/*GitHub*/}
                      
                        {/*Linkedin*/}
                        <LinkedinShareButton
                        // url = {/*put portfolio url here */}
                        >    
                            <LinkedinIcon className = 'mx-3' size = {36}/>
                       </LinkedinShareButton>

                        {/* facebook */}
                        <FacebookShareButton
                        // url = {/*put portfolio url here */}
                        >    
                            <FacebookIcon className = 'mx-3' size = {36}/>
                        </FacebookShareButton>

                        {/* twitter */}
                        <TwitterShareButton
                        // url = {/*put portfolio url here */}
                        >    
                            <TwitterIcon className = 'mx-3' size = {36}/>
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

export default Footer
