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
                <h1 className = 'about-heading'>About Me</h1>
                <p>
                Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. </p>

                <p>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
                </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutMe
