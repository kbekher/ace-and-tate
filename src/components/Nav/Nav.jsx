import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        {navLinks.map(navLink => (
          <li key={navLink.name}>
            <NavLink to={{ pathname: navLink.path }} className='Nav__item'>
              {navLink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}