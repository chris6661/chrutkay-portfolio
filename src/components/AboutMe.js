import React from 'react';
import author from '../images/portpholder1.png'
const AboutMe = () => {
    return (
         <div id = 'about' className='aboutme'>
            <div className='container py-5'> 
                <div className='row'>
                    <div className=' col-lg-6 col-xm-12'>
                        <div className='photo-wrap mb-5'>
                        <img className = 'profile-img' src={author} alt='Chris in his natural habitat'/>
                        </div>
                    </div> 
                <div className='col-lg-6 col-xm-12'> 
                <br/>
                <h1 className = 'about-heading'>About Me</h1>
                <p>
                    My name is Chris. I recently completed the full stack web development coding bootcamp at the University of Texas at Austin. Web development has drawn a passion out of me that I was missing for a long time and I hope to pursue a career as a front end web developer. In the mean time of finding my dream role if you would like to work on a fun project together and build both of our portfolios more, feel free to reach out either by my LinkedIn, GitHub, or email.
                    <br/><br/>
                    Outside of the professional world, I love travelling and seeing what the world has to offer and am currently planning my next trip. If you want to know anything else or would just like to make a new friend in Austin some time and grab some coffee, fill out the contact form!
                </p>

                </div>
            </div>
            
        </div>
        
        </div>
    )
}

export default AboutMe
