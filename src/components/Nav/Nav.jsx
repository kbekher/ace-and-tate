import React from 'react';

import './Nav.scss';

export const Nav = () => {
  const navLinks = ['glasses', 'sunglasses', 'sport', 'lenses', 'accessories'];

  return (
    <nav className="Nav">
      <ul className="Nav__list">
        {navLinks.map(navLink => (
          <li key={navLink}><a href={`#${navLink}`} className="Nav__item">{navLink}</a></li>
        ))}
      </ul>
    </nav>
  );
}

