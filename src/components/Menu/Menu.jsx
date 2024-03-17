import { useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import { MenuContext } from '../../MenuContext';
import { Nav } from '../Nav';

import './Menu.scss';

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={cn("Menu", { "hidden": !isVisible })}>
      <div className="Menu__content">
        <div className="Menu-top">
          <button className="Menu__close" onClick={handleClick}>
            <img
              src="./assets/icons/cross.svg"
              alt="close menu"
              className="Menu__close-icon"
            />
          </button>

          <img src="./assets/logo.svg" alt="logo" className='Menu__logo' />
        </div>

        <div className="Menu__nav">
          <Nav />
        </div>

      </div>
    </div>
  );
};