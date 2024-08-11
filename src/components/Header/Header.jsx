import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { textVariant } from '../../utils/motion';

import { SectionWrapper } from '../../hoc';
import { CartContext, FavouritesContext } from '../../store/SavedProductsContext';

import { Logo } from '../Logo';
import { Nav } from '../Nav';


import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState('');

  useEffect(() => {
    if (location.pathname !== '/cart') {
      setPrevPath(location.pathname);
    }
  }, [location]);

  const actionIcons = ['heart', 'cart'];

  const { cartItems } = useContext(CartContext);
  const { favourites } = useContext(FavouritesContext);

  const getAmount = (iconType) => {
    return iconType === 'cart' ? cartItems.length : favourites.length;
  };

  return (
    <motion.header variants={textVariant(1.5)} className="Header">
      <div className="Header__content">

        <div className="Header__hamburger">
          <Link
            to={{ pathname: `${location.pathname !== '/menu' ? '/menu': '/'}` }}
          >
            <img
              src={`./assets/icons/${location.pathname !== '/menu' ? 'menu' : 'cross'}.svg`}
              alt="hamburger menu"
              className="Header__hamburger-icon"
            />
          </Link>
        </div>

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
              <li className={`Header__actionItem${(location.pathname === '/cart' && icon === 'heart') ? '--none': ''} Header__actionItem--${icon}`} key={icon}>
                <Link 
                  to={{ pathname: `${location.pathname !== '/cart' ? `/${icon}` : prevPath}` }}
                >
                  <img
                    src={`./assets/icons/${location.pathname !== '/cart' ? icon : 'cross'}.svg`}
                    alt={`${icon} icon`} 
                  />

                  {location.pathname !== '/cart' && getAmount(icon) !== 0 && (
                    <div key={getAmount(icon)} className='Header__actionCount'>
                      {getAmount(icon)}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.header>
  );
}

export default SectionWrapper(Header, "header");