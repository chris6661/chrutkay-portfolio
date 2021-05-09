// import React, { useState, useRef } from 'react';
// import emailjs from 'emailjs-com'; //for email functionality
// import {useForm} from 'react-hook-form'; //for info validation in form

// const Contact = () => {
//     const [successMessage, setSuccessMessage] = useState(""); 
//     //using email
//     const { register, handleSubmit, errors} = useForm(); 
    
//     const serviceID = 'service_ID';
//     const templateID = 'template_ID'; 
//     const userID = 'user_cMh6yknWEr4hfDBhT5KRb'

//     const nameRef = useRef({...register( 'name', {
//         required: "Pleaase enter your name.", 
//         maxLength: {
//             value: 20, 
//             message: "Please enter a name with fewer than 20 characters."
//         }
//     })
// });
//     const phoneRef = useRef( {...register( 'phone', {
//         required: 'Please enter your phone number.'
//     })
// })
//     const emailRef = useRef({...register( 'email', {
//         required: 'Please provide your email address.',
//         pattern: {
//             //email validation characters, can not set less than 2 characters for end
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//             message: 'Invalid email address.'
//         }
//     })
// })
//     const subjectRef = useRef( {...register( 'subject', {
//         required: 'You forgot to add the subject!',
//     })
// })
//     const descriptionRef = useRef( {...register( 'description', {
//         required: 'Please shortly describe how I can help you.',
//     })
// })

//      //use submit function and reset fields
//     const onSubmit = (data, reset) => {
        
//             sendEmail(
//                 serviceID,
//                 templateID,
//                 {
//                  name: data.name, 
//                  phone: data.phone, 
//                  email: data.email, 
//                  subject: data.subject, 
//                  description: data.description
//                 },
//                 userID
//             )
//             reset.target.reset();
//         }

//         //function to send email with emailjs
//     const sendEmail = (serviceID, templateID, variables, userID) => {
//         emailjs.send(serviceID, templateID, variables, userID)
//           .then(() => {
//               setSuccessMessage('Form sent successfully! I will talk to you soon!');
//           }).catch(err => console.error(`Something went wrong ${err}`)); 
//       }

//     return (
//         <div id = 'contact'className='contact'>
//             <div className = 'text-center'>
//             <h1>Contact Me</h1>
//             <p>Please fill out the form and I will contact you.</p>
//             <span className = 'successMessage'>{successMessage}</span>
//             </div>
//             <div className = 'container'>
//                 <form onSubmit = {handleSubmit(onSubmit)}>
//                 <div className = 'row'>
//                     <div className = 'col-md-6 col-xs-12'>

//                         {/* NAME INPUT */}
//                         <div className = 'text-center'>                       
//                         <input                       
//                         type= 'text'
//                         className='form-control'
//                         placeholder= 'Name'
//                         // name = 'name'
//                         ref = { nameRef }
//                         />
//                         <div className = 'line'></div>
//                         </div>
//                     <span className = 'error-message'>
//                         {/* {errors.name && errors.name.message} */}
//                     </span>

//                         {/* PHONE INPUT */}
//                         <div className = 'text-center'>
//                         <input                        
//                         type= 'text'
//                         className='form-control'
//                         placeholder= 'Phone Number'
//                         // name = 'phone'
//                         ref = { phoneRef }
                        
//                         />
//                         <div className = 'line'></div>
//                         </div>
//                         <span className = 'error-message'>
//                         {/* {errors.phone && errors.phone.message} */}
//                     </span>

//                         {/* EMAIL INPUT */}
//                         <div className = 'text-center'>
//                         <input                        
//                         type = 'text'
//                         className='form-control'
//                         placeholder= 'Email'
//                         // name = 'email'
//                         ref = { emailRef }
                        
//                         />
//                         <div className = 'line'></div>                       
//                         </div>
//                         <span className = 'error-message'>
//                         {/* {errors.email && errors.email.message} */}
//                         </span>

//                         {/* SUBJECT INPUT */}
//                         <div className = 'text-center'>
//                         <input 
//                         type = 'text'
//                         className='form-control'
//                         placeholder= 'Subject'
//                         // name = 'subject'
//                         ref = {subjectRef}                     
                    
//                         />
//                         <div className = 'line'></div>
//                         </div>
//                         <span className = 'error-message'>
//                             {/* {errors.subject && errors.subject.message} */}
//                         </span>
//                     </div>

//                     <div className = 'col-md-6 col-xs-12'>
//                         {/*DESCRIPTION */}
//                         <div className = 'text-center'>
//                     <textarea
//                         type = 'text'
//                         className='form-control'
//                         placeholder= 'How can I help?'
//                         // name = 'description'
//                         ref = {descriptionRef}

//                         ></textarea>
//                         <div className = 'line'></div>
//                         </div>
//                         <span className = 'error-message'>
//                             {/* {errors.description && errors.description.message} */}
//                         </span>
//                         <button className = 'btn-contact contact-btn' type='submit'>Contact</button>
//                     </div>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Contact

import React, { useState }from 'react'
import emailjs from 'emailjs-com'; 
import {useForm} from 'react-hook-form'; 

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, errors } = useForm();  

    const serviceId = 'service_ID';
    const templateId = 'template_ID';
    const userId = 'user_cMh6yknWEr4hfDBhT5KRb';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceId,
            templateId,
            {
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
                        name='name'
                        ref={
                            register({
                                required: 'Please enter your name.'
                            })
                        }
                        />
                        <div className='line'></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                        {/*email*/}
                        <div className="text-center">
                        <input
                        id='email'
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        />
                        <div className='line'></div>
                        </div>

                        {/*subject*/}
                        <div className="text-center">
                        <input
                        id='subject'
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        name='subject'
                        />
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
                        name='description'
                        ></textarea>
                        <div className='line'></div>
                        </div>

                        <button className='btn-contact contact-btn' type='submit'>Contact Me</button>

                    </div>
                </div>
                </form>

            </div>

        </div>
    )
}

export default Contact
