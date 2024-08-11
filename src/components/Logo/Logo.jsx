import './Logo.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to='/' className="Logo">
      <img
        className="Logo__image"
        src="./assets/logo.png"
        alt="logo"
      />
    </Link>
  );
};