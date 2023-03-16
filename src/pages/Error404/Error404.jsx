import React from 'react';
import ErrorStyles from './Error404.module.scss';
import { images } from '../../assets';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className={ErrorStyles.container}>
        <div className={ErrorStyles.textContainer}>
            <h1 className={ErrorStyles.h1}>Ruh roh!</h1>
            <h3 className={ErrorStyles.h3}>Lost Puppy?</h3>
            <h4 className={ErrorStyles.h4}>Sorry this page does not exist,</h4>
            <h4 className={ErrorStyles.h4}>please click below to go back to the home page</h4>
            <div className={ErrorStyles.linkContainer}>
            <Link to=''  className={ErrorStyles.link}>Home</Link>
            </div>
        </div>
        <div className={ErrorStyles.imageContainer}>
            <img src={images.KoaNoBg} alt='A lost puppy' className={ErrorStyles.image} />
        </div>
    </div>
  )
}

export default Error404