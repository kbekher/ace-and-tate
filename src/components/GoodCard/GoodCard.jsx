import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { fadeIn } from '../../utils/motion';
import { CartContext, FavouritesContext } from '../../store/SavedProductsContext';
import { AWS_URL }from '../../constants/constants';

import './GoodCard.scss';

export const GoodCard = ({ product }) => {
  const { id, name, color, price, url } = product;
  const IMG_URL = `${AWS_URL}products/`;


  const { cartItems, changeCartItems } = useContext(CartContext);
  const isInCart = cartItems.length > 0
    ? cartItems.find((item) => item.id === id) : false;

  const { favourites, changeFavItems } = useContext(FavouritesContext);
  const isInFavs = favourites.length > 0
    ? favourites.find(item => item.id === id) : false;

  const handleCartClick = () => {
    changeCartItems(product);
  };

  const handleFavClick = () => {
    changeFavItems(product);
  };


  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * id, 0.75)}
      className='GoodCard'
    >
      <div className='GoodCard__img-container'>
        <button
          type="button"
          className={cn(
            'GoodCard__fav-icon',
            { 'GoodCard__fav-icon--in-favs': isInFavs },
          )}
          onClick={handleFavClick}
        >
          {''}
        </button>

        <Link to={{ pathname: `/products/${id}` }}>
          <img src={`${IMG_URL}${url}.jpg`} alt="glasses img" className='GoodCard__good-img' />
        </Link>

      </div>

      <div className="GoodCard__info">

        <Link to={{ pathname: `/products/${id}` }}>
          <span>{name}</span>
        </Link>

        <span className='GoodCard__color'>{color}</span>
        <span>{price}&euro;</span>
        <button
          type="button"
          className={cn(
            'GoodCard__cart-btn',
            { 'GoodCard__cart-btn--in-cart ': isInCart },
          )}
          onClick={handleCartClick}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>
    </motion.div>
  );
}
