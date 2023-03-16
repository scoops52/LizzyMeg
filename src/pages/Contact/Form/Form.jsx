import React, { useState } from 'react';
import './Form.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
    const [nameValidity, setNameValidity] = useState(null);
    const [emailValidity, setEmailValidity] = useState(null);
    const [messageValidity, setMessageValidity] = useState(null);
    const [nameClassName, setNameClassName] = useState('form-control');
    const [emailClassName, setEmailClassName] = useState('form-control');
    const [messageClassName, setMessageClassName] = useState('form-control');
    const [name, setName] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');

   

    const checkNameValidity = (e) => {
        const input = e.target;
        
        if (!input.checkValidity()) {
            setNameValidity(false);
            setNameClassName('was-invalidated');
            console.log(nameClassName);
        } else {
            setNameValidity(true);
            setNameClassName('was-validated');
            console.log(nameClassName);
        }
        
    };

    const checkEmailValidity = (e) => {
        const input = e.target;
        if (!input.checkValidity()) {
            setEmailValidity(false)
            setEmailClassName('was-invalidated');
        } else {
            setEmailValidity(true);
            setEmailClassName('was-validated');
        }
    };

    const checkMessageValidity = (e) => {
        const input = e.target;
        
        if (!input.checkValidity()) {
            setMessageValidity(false);
            setMessageClassName('was-invalidated');
            console.log(nameClassName);
        } else {
            setMessageValidity(true);
            setMessageClassName('was-validated');
            console.log(nameClassName);
        }
        
    };

    const handleName = (e) => {
        setName(e.target.value);
    }

    //  *****emailJS******

    const form = useRef();
    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (captchaToken) {
            emailjs.sendForm('service_6h3545w', 'template_b139nh3', form.current, 'HM4xy5fugu2lLLMLl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert('Please verify that you are a human')
        }
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-floating info">
                <input name='name' type="text" placeholder='name' className={nameClassName}  onBlur={checkNameValidity} onChange={handleName} required />
                <label htmlFor="name">Name</label>
                {nameValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green' size={20} className='invalid-icon'/>
                    <div className='valid-feedback'>
                        {`Thanks ${name}!`}
                    </div>
                    </>
                )}
                {nameValidity === false && (
                   <>
                   <FontAwesomeIcon icon={faCircleXmark} color='red' size={20} className='invalid-icon'/>
                    <div className="invalid-feedback">
                        Please provide a name!
                    </div>
                    </>
                )}
            </div>
            <div className="form-floating info">
                <input name='email' type="email" placeholder='email' onBlur={checkEmailValidity} className={emailClassName} required />
                <label htmlFor="email">E-Mail</label>
                {emailValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green'  className='invalid-icon'/>
                    <div className='valid-feedback'>
                        Looks Good!
                    </div>
                    </>
                )}
                {emailValidity === false && (
                    <>
                    <FontAwesomeIcon icon={faCircleXmark} color='red'  className='invalid-icon'/>
                    <div className="invalid-feedback">
                        Please provide your E-Mail so I can reply!
                    </div>
                    </>
                )}
            </div>
            <div className="form-floating message-container" >
                <textarea name='message' type='textarea' placeholder='message' onBlur={checkMessageValidity} className={messageClassName} required/>
                <label htmlFor="message">Message</label>
                {messageValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green' className='invalid-icon'/>
                    <div className='valid-feedback'>
                        I look forward to reading your message {name}!
                    </div>
                    </>
                )}
                {messageValidity === false && (
                    <>
                    <FontAwesomeIcon icon={faCircleXmark} color='red'  className='invalid-icon'/>
                    <div className="invalid-feedback">
                        Please add some details about your inquiry.
                    </div>
                    </>
                )}
            </div>
            <div className='btn-container'>
                <button className='submit-btn' type='submit'>Send</button>
            </div>
            <div className='captcha-container'>
            <ReCAPTCHA
                sitekey='6LcV-wklAAAAACLLv86NqxGtUabwi9raw36CLqtK'
                onChange={handleCaptchaChange}
                
                
            />
            </div>
        </form>
    )
}

export default Form