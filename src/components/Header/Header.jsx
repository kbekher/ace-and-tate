import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { textVariant } from '../../utils/motion';

import { SectionWrapper } from '../../hoc';
import { CartContext, FavouritesContext } from '../../store/SavedProductsContext';

import { Logo } from '../Logo';
import { Nav } from '../Nav';
// import { BasketContext, MenuContext } from '../../LayerContext';

import './Header.scss';

const Header = () => {
  const actionIcons = ['heart', 'bag'];

  // const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  // const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  // const { isCartOpen, setIsCartOpen } = useContext(BasketContext);

  // const handleCartClick = () => setIsCartOpen(!isCartOpen);

  const { cartItems } = useContext(CartContext);
  const { favourites } = useContext(FavouritesContext);

  const getAmount = (iconType) => {
    return iconType === 'bag' ? cartItems.length : favourites.length;
  };

  return (
    <motion.header variants={textVariant(1.5)} className="Header">
      <div className="Header__content">

        <div className="Header__hamburger">
          <Link
            to={{ pathname: '/menu' }}
          // className="Header__hamburger"
          // onClick={handleMenuClick}
          >
            <img
              src="./assets/icons/menu.svg"
              alt="hamburger menu"
              className="Header__hamburger-icon"
            />
          </Link>
        </div>

        {/* 
        <div className="Header__hamburger" onClick={handleMenuClick}>
          <img
            src="./assets/icons/menu.svg"
            alt="hamburger menu"
            className="Header__hamburger-icon"
          />
        </div> */}

        <div className="Header__logo">
          <Logo />
        </div>

        <div className="Header__nav">
          <Nav />
        </div>

        <div className="Header__actions">
          <ul className='Header__actionList'>
            <Link to={{ pathname: '/eyetest' }} className="Header__link">
              Free eye test
            </Link>

            {actionIcons.map(icon => (
              <li className='Header__actionItem' key={icon}>
                <Link to={{ pathname: icon === 'bag' ? `/${icon}` : '/' }}>
                  <img src={`./assets/icons/${icon}.svg`} alt={`${icon} icon`} />

                  {getAmount(icon) !== 0 && (
                    <div key={getAmount(icon)} className='Header__actionCount'>
                      {getAmount(icon)}
                    </div>
                  )}
                </Link>
                {/* <button type="button" onClick={icon === 'bag' ? handleCartClick : () => { }}>
                  <img src={`./assets/icons/${icon}.svg`} alt={`${icon} icon`} />

                  {getAmount(icon) !== 0 && (
                    <div key={getAmount(icon)}>
                      {getAmount(icon)}
                    </div>
                  )}
                </button> */}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.header>
  );
}

export default SectionWrapper(Header, "header");