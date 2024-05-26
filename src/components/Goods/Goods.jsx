import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { fadeIn, textVariant } from '../../utils/motion';

import { SectionWrapper } from '../../hoc';
import { CartContext, FavouritesContext } from '../../store/SavedProductsContext';
import './Goods.scss';

import { products } from './products';
import { Link } from 'react-router-dom';

const GoodCard = ({ product }) => {
  const { id, name, color, price, url } = product;

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
      className='Goods__card'
    >
      <div className='Goods__img-container'>
        <button
          type="button"
          className={cn(
            'Goods__fav-icon',
            { 'Goods__fav-icon--in-favs': isInFavs },
          )}
          onClick={handleFavClick}
        >
          {''}
        </button>

        <Link to={{ pathname: `/products/${id}` }}>
          <img src={url} alt="glasses img" className='Goods__good-img' />
        </Link>

      </div>

      <div className="Goods__info">

        <Link to={{ pathname: `/products/${id}` }}>
          <span>{name}</span>
        </Link>

        <span className='Goods__color'>{color}</span>
        <span>{price}&euro;</span>
        <button
          type="button"
          className={cn(
            'Goods__cart-btn',
            { 'Goods__cart-btn--in-cart ': isInCart },
          )}
          onClick={handleCartClick}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>
    </motion.div>
  );
}


const Goods = () => {

  return (
    <div className='Goods'>
      <div className="Goods__content">

        <motion.div variants={textVariant(1.5)} className='Goods__top'>
          <h2>New in</h2>
          <button disabled>See all</button>
        </motion.div>


        <div className="Goods__wrapper">
          {products.map((item) => (
            <GoodCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Goods, "goods");