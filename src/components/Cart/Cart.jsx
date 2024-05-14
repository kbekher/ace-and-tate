import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../../LayerContext';
import cn from 'classnames';
import { CartContext } from '../../store/SavedProductsContext';

import './Cart.scss';

export const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { isCartOpen, setIsCartOpen } = useContext(BasketContext);

  const handleClick = () => setIsCartOpen(!isCartOpen);

  const { cartItems } = useContext(CartContext);

  return (
    <div className={cn("Cart", { "hidden": !isVisible })}>
      <div className="container">
        <div className="Cart__content">
          <div className="Cart__top">

            <img
              src="./assets/icons/bag-cart.svg"
              alt="bag"
              className="Cart__bag-icon"
            />

            <button className="Cart__close" onClick={handleClick}>
              <img
                src="./assets/icons/cross.svg"
                alt="close Cart"
                className="Cart__close-icon"
              />
            </button>

          </div>

          <h2 className='Cart__title'>My cart</h2>

          <div className="Cart__products-container">
            {!cartItems.length ? (
              <h3 className="Cart__title--error">Cart is empty</h3>
            ) : (
              <>
                <div className="Cart__products">
                  {cartItems.map(item => (
                    <div className='Cart__product' key={item.id}>

                      <div className="Cart__product-img-container">
                        <img src={`./assets/goods/glass${item.id}.jpg`} alt="glasses img" className='Cart__product-img' />
                      </div>

                      <div className="Cart__product-info">
                        <span>{item.name}</span>
                        <span className='Cart__product-color'>{item.color}</span>
                        <span>{item.price}&euro;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

