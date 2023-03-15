import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavLinkStyles from './StyledNavLink.module.scss';


const StyledNavLink = ({to, linkText}) => {

  return (
    <div className={StyledNavLinkStyles.container}>
        <span className={StyledNavLinkStyles.innerContainer}>
            <NavLink to={to} className={StyledNavLinkStyles.link}>{linkText}</NavLink>
        </span>
    </div>
  )
}

export default StyledNavLink