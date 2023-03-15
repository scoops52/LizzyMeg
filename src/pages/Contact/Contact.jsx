import React from 'react';
import Form from './Form/Form';
import ContactStyles from './Contact.module.scss';
import { images } from '../../assets';

const Contact = () => {
    return (
        <div className={ContactStyles.container}>
            <div className={ContactStyles.formContainer}>
                <h1 className={ContactStyles.title}>
                    Contact Liz
                </h1>
                <Form />
            </div>
            <div className={ContactStyles.imgContainer}>
                <img src={images.galleryImage2} alt='Liz Posing Standing' className={ContactStyles.img} />
            </div>
        </div>
    )
}

export default Contact