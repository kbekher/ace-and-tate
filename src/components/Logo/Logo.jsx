// import { useContext } from 'react';
// import { animateScroll as scroll } from 'react-scroll';
// import { MenuContext } from '../../MenuContext';
import './Logo.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
  // const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  // const scrollTop = () => {
  //   scroll.scrollToTop({
  //     duration: 250,
  //     delay: 0,
  //     smooth: true,
  //   });
  // }

  // const handleClick = () => {
    // if (!isMenuOpen) {
    //   scrollTop();
    //   return;
    // }

    // setIsMenuOpen(false)
    // scrollTop();
  // }

  return (
    <Link
    to='/'
      className="Logo"
      // onClick={handleClick}
    >
      <img
        className="Logo__image"
        src="./assets/logo.png"
        alt="logo"
      />
    </Link>
  );
};