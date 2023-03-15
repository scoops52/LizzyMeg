import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavLink from '../../components/StyledNavLink/StyledNavLink';
import TitlePageStyles from  './TitlePage.module.scss';
import { images } from '../../assets';

const TitlePage = () => {
  return (
    <div className={TitlePageStyles.container}>
        <div className={TitlePageStyles.imageContainer}>
            {/* <img src={images.titleImage} alt="Title Page" className={TitlePageStyles.image} /> */}
        <div className={TitlePageStyles.buttonContainer}>
        <StyledNavLink to='/about' linkText='Enter' style={{ color: 'white', fontSize: '2rem' }}/>
        </div>
        </div>
    </div>
  )
}

export default TitlePage