import React, { useState }from 'react'
import emailjs from 'emailjs-com'; 
import {useForm} from 'react-hook-form'; 

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit } = useForm();  

    const serviceId = 'service_ID';
    const templateId = 'template_ID';
    const userId = 'user_cMh6yknWEr4hfDBhT5KRb';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceId,
            templateId,
            {
                //react state, boolean value for valid or not, if false dont fire function; if data.xx is empty send message,; run onsubmit if missing data return false
                name: data.name,
                email: data.email, 
                subject: data.subject, 
                description: data.description
            }, 
            userId
            )
            r.target.reset();
    }

    const sendEmail = (serviceId, templateId, variables, userId) => {
        emailjs.send(serviceId, templateId, variables, userId)
          .then(() => {
              setSuccessMessage('Form sent successfully, I will talk to you soon!');
          }).catch(err => console.error(`Something went wrong ${err}`))
      }

    return (
        <div className="contact">
            <div className = "text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form and I will contact you. </p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        {/*name*/}
                        <div className="text-center">
                        <input
                            id='name'
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            {...register('name', {
                                required: 'Please enter your name.'
                            })} />
                        <div className='line'></div>
                        </div>
                        

                        {/*email*/}
                        <div className="text-center">
                        <input
                            id='email'
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            {...register('email', {
                                required: 'Please provide your email address.',
                                pattern: {
                                    //email validation characters, can not set less than 2 characters for end
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address.'
                                }
                            })} />
                        <div className='line'></div>
                        </div>

                        {/*subject*/}
                        <div className="text-center">
                        <input
                            id='subject'
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            {...register('subject', {
                                type: "required",
                                required: 'You forgot to add the subject!',
                            })} />
                        <div className='line'></div>
                        </div>

                    </div>

                    <div className='col-md-6 col-xs-12'>
                        {/*MessGE*/}
                        <div className = 'text-center'>
                        <textarea
                            id='message'
                            type='text'
                            className='form-control'
                            placeholder='Message'
                            {...register('description', {
                                required: 'Please shortly describe how I can help you.',
                            })}></textarea>
                        <div className='line'></div>
                        </div>

                        <button className='btn-contact contact-btn' type='submit'>Contact Me</button>

                    </div>
                </div>
                </form>

            </div>
            <br/>
        </div>
    );
}

export default Contact
