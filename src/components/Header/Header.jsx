import React, { useContext } from 'react';

import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { MenuContext } from '../../MenuContext';

import './Header.scss';

export const Header = () => {
  const actionIcons = ['loupe', 'heart', 'bag'];

  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="Header">
      <div className="Header__content">

        <div className="Header__hamburger" onClick={handleClick}>
          <img
            src="./assets/icons/menu.svg"
            alt="hamburger menu"
            className="Header__hamburger-icon"
          />
        </div>

        <div className="Header__logo">
          <Logo />
        </div>

        <div className="Header__nav">
          <Nav />
        </div>

        <div className="Header__actions">
          <ul className='Header__actionList'>
            {actionIcons.map(icon => (
              <li className='Header__actionItem' key={icon}>
                <button type="button">
                  <img src={`./assets/icons/${icon}.svg`} alt={`${icon} icon`} />
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  )
}

