import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavLink from '../StyledNavLink/StyledNavLink';
import FooterStyles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
        <div className={FooterStyles.copyright}>
            <h4>Made by Sean Cooper &copy; 2023 </h4>
        </div>
        <div className={FooterStyles.contact}>
            <NavLink to='contact' className={FooterStyles.contactLink}>
                Contact Me
                <FontAwesomeIcon icon={faPaperPlane} size={50} className={FooterStyles.contactIcon} />
            </NavLink>
        </div>
    </div>
  )
}

export default Footer