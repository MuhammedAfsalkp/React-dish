import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
  return (
    
      <li>
        <NavLink to={`/dishes/${props.categoryId}`} exact>
          {props.title}
        </NavLink>
      </li>
      
    
  );
};

export default NavLinks;
