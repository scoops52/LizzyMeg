import React from 'react';

import StyledNavLink from '../../components/StyledNavLink/StyledNavLink';
import TitlePageStyles from  './TitlePage.module.scss';


const TitlePage = () => {
  return (
    <div className={TitlePageStyles.container}>
        <div className={TitlePageStyles.imageContainer}>
            
        <div className={TitlePageStyles.buttonContainer}>
        <StyledNavLink to='/about' linkText='Enter' style={{ color: 'white', fontSize: '2rem' }}/>
        </div>
        </div>
    </div>
  )
}

export default TitlePage