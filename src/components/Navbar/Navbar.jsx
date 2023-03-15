import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss'
import { images } from '../../assets'
import { motion } from 'framer-motion';
import StyledNavLink from '../StyledNavLink/StyledNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => open ? setOpen(false) : setOpen(true);

    return (
        <nav className={NavbarStyles.container}>
            <div className={NavbarStyles.logoContainer}>
                <NavLink
                    className={NavbarStyles.logoLink}
                    to='/home'
                >

                    <img src={images.logo} alt='logo' />

                </NavLink>
            </div>
            <div className={NavbarStyles.linksContainer}>
                <ul className={NavbarStyles.links}>
                    {['about', 'photos', 'reel', 'contact'].map((item) => (
                        <li key={`link-{item}`} className={NavbarStyles.linkLi}>
                            <StyledNavLink to={`${item}`} linkText={item} />
                        </li>
                    ))}
                </ul>

                <div className={NavbarStyles.socials} >
                    <Link to='https://www.instagram.com/lizzy_meg_/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className={NavbarStyles.socialIcon} />
                    </Link>
                    <Link to='https://youtu.be/7zixqxX4yMU' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faYoutube} className={NavbarStyles.socialIcon} />
                    </Link>
                </div>
            </div>
            <div className={NavbarStyles.dropdownIcon}>
                {!open ?
                    <FontAwesomeIcon icon={faBars} onClick={handleClick} />
                    :
                    <FontAwesomeIcon icon={faXmark} onClick={handleClick} />}
            </div>
            <div className={NavbarStyles.dropdown}>
                {open && (
                    <motion.div
                        whileInview={{ x: [300, 0] }}
                        transition={{ durtation: 0.85, ease: 'easeOut' }}
                    >
                        <ul className={NavbarStyles.dropdownLinks}>
                            {['about', 'photos', 'reel', 'contact'].map((item) => (
                                <li key={`link-{item}`} className={NavbarStyles.dropdownLinkLi}>
                                    <NavLink to={`${item}`} linkText={item} className={NavbarStyles.dropdownNavLink}>{item}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>


            {/* <div className='app__navbar-menu'>
        { !open ? 
        <HiMenuAlt4 onClick={handleClick} />
        :
        <HiX onClick={handleClick} /> }
      </div>
      <div className='app__navbar-dropdown'>
        {open && (
          <motion.div
            whileInview={{ x: [300, 0] }}
            transition={{ durtation: 0.85, ease: 'easeOut' }}
          >
            <ul>
              {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                <li key={`link-{item}`}>
                  <NavLink to={`${item}`}>{item}</NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className='app__navbar-socials' >
        <Link to='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineLinkedin size={25} className='social' />
        </Link>
        <Link to='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineGithub size={25} className='social' />
        </Link>
      </div> */}
        </nav>
    )
}

export default Navbar