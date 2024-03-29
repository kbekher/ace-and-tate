import React, { useContext } from 'react';
import './Goods.scss';
import { CartContext, FavouritesContext } from '../../SavedProductsContext';
import classNames from 'classnames';

export const GoodCard = ({ product }) => {
  const { id, name, color, price } = product;

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
    <div className='Goods__card'>
      <div className='Goods__img-container'>
        <button
          type="button"
          // className='Goods__fav-icon'
          className={classNames(
            'Goods__fav-icon',
            { 'Goods__fav-icon--in-favs': isInFavs },
          )}
          onClick={handleFavClick}
        >
          {''}
        </button>

        <img src={`./assets/goods/glass${id}.jpg`} alt="glasses img" className='Goods__good-img' />
      </div>

      <div className="Goods__info">
        <span>{name}</span>
        <span className='Goods__color'>{color}</span>
        <span>{price}&euro;</span>
        <button
          type="button"
          className={classNames(
            'Goods__cart-btn',
            { 'Goods__cart-btn--in-cart ': isInCart },
          )}
          onClick={handleCartClick}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}