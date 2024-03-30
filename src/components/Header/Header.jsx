import React, { useContext } from 'react';

import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { BasketContext, MenuContext } from '../../LayerContext';

import './Header.scss';
import { CartContext, FavouritesContext } from '../../SavedProductsContext';

export const Header = () => {
  const actionIcons = ['heart', 'bag'];

  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const { isCartOpen, setIsCartOpen } = useContext(BasketContext);

  const handleCartClick = () => setIsCartOpen(!isCartOpen);

  const { cartItems } = useContext(CartContext);
  const { favourites } = useContext(FavouritesContext);

  const getAmount = (iconType) => {
    return iconType === 'bag' ? cartItems.length : favourites.length;
  };

  return (
    <header className="Header">
      <div className="Header__content">

        <div className="Header__hamburger" onClick={handleMenuClick}>
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
                <button type="button" onClick={icon === 'bag' ? handleCartClick : () => {}}>
                  <img src={`./assets/icons/${icon}.svg`} alt={`${icon} icon`}/>

                  {getAmount(icon) !== 0 && (
                    <div key={getAmount(icon)}>
                      {getAmount(icon)}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  )
}

