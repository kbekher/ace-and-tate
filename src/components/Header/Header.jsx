import React from 'react';

import './Header.scss';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <div className="Header__logo">
          <Logo />
        </div>

        <nav className="Header__nav">
          <ul className="Header__navList">
            <li><a href="#glasses" className="Header__navItem">Glasses</a></li>
            <li><a href="#sunglasses" className="Header__navItem">Sunglasses</a></li>
            <li><a href="#sport" className="Header__navItem">Sport</a></li>
            <li><a href="#lenses" className="Header__navItem">Lenses</a></li>
            <li><a href="#accessories" className="Header__navItem" >Accessories</a></li>
          </ul>
        </nav>

        <div className="Header__actions">
          <ul className='Header__actionList'>
            <li className='Header__actionItem'>
              <button type="button">
                <img src="./assets/icons/loupe.svg" alt="search icon" />
              </button>
            </li>
            <li className='Header__actionItem'>
              <button type="button">
                <img src="./assets/icons/heart.svg" alt="favourites icon" />
              </button>
            </li>
            <li className='Header__actionItem'>
              <button type="button">
                <img src="./assets/icons/bag.svg" alt="bag icon" />
              </button>
            </li>
          </ul>
        </div>

      </div>
    </header>
  )
}

