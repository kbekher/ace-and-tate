import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import cn from 'classnames';

import { CartContext, FavouritesContext } from '../../store/SavedProductsContext';

import './CartPage.scss';

const IMG_URL = 'https://ace-and-tate.s3.eu-central-1.amazonaws.com/products/';

const CartProduct = ({ product }) => {
  const { id, name, color, price, url } = product;

  const { favourites } = useContext(FavouritesContext);

  const isInFavs = (id) => {
    return favourites.length > 0 ? favourites.find(item => item.id === id) : false;
  }

  const actionIcons = ['pen', 'copy', 'cross'];

  return (
    <div className='Cart__product' key={id}>

      <div className="Cart__product-img-container">
        <button
          type="button"
          className={cn(
            'fav-icon',
            { 'fav-icon--in-favs': isInFavs(id) },
          )}
        >
          {''}
        </button>

        <img src={`${IMG_URL}${url}.jpg`} alt="glasses img" className='Cart__product-img' />
      </div>

      <div className="Cart__product-section">
        <div className="Cart__product-info">
          <div className="Cart__product-info--inner">
            <span>{name}</span>
            <span className='Cart__product-color'>{color}</span>
            <span>{price}&euro;</span>
          </div>
        </div>

        <ul className="Cart__product-actions">
          {actionIcons.map(icon => (
            <li key={icon}>
              <button
                type="button"
                className='Cart__product-btn'
              >
                {icon === 'pen' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={icon}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 3.46967C17.3897 3.32902 17.1989 3.25 17 3.25C16.8011 3.25 16.6103 3.32902 16.4697 3.46967L14.4697 5.46967L3.46967 16.4697C3.32902 16.6103 3.25 16.8011 3.25 17V20C3.25 20.4142 3.58579 20.75 4 20.75H7C7.19891 20.75 7.38968 20.671 7.53033 20.5303L18.5296 9.53104C18.5299 9.5308 18.5301 9.53057 18.5303 9.53033L20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967L17.5303 3.46967ZM16.9393 9L15 7.06066L4.75 17.3107V19.25H6.68934L16.9393 9ZM18 7.93934L18.9393 7L17 5.06066L16.0607 6L18 7.93934Z" fill="black" />
                  </svg>
                )}

                {icon === 'copy' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={icon}>
                    <rect x="4" y="6" width="14" height="16" rx="2" fill="#F1fF1F1" />
                    <rect x="4.75" y="6.75" width="12.5" height="14.5" rx="1.25" stroke="#00000E" stroke-opacity="0.933333" stroke-width="1.5" />
                    <rect x="7.75" y="3.75" width="12.5" height="14.5" rx="1.25" stroke="black" stroke-width="1.5" />
                  </svg>

                )}

                {icon === 'cross' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={icon}>
                    <path d="M4 4L20 20" stroke="#00000E" stroke-opacity="0.933333" stroke-width="2" stroke-linecap="round" />
                    <path d="M20 4L4 20" stroke="#00000E" stroke-opacity="0.933333" stroke-width="2" stroke-linecap="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}

export const CartPage = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);


  const showDetails = () => {
    setIsInfoVisible(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { cartItems } = useContext(CartContext);

  const totalAmount = !cartItems.length ? 0 : cartItems.map((item) => {
    return item.price;
  }).reduce((a, b) => a + b);

  return (
    <div className="CartPage">
      <div className="Cart">
        <div className="Cart__content">

          <h2 className='Cart__title'>My cart <span>{cartItems.length || 0}</span></h2>

          <div className="Cart__products-container">
            {!cartItems.length ? (
              <h3 className="Cart__title--error">Cart is empty</h3>
            ) : (
              <>
                <div className="Cart__products">
                  {cartItems.map(item => (
                    <CartProduct product={item} />
                  ))}
                </div>
              </>)
            }
          </div>

          <div className="Cart__summary-container">
            <div className="Cart__summary-info">
              <h4 className="Cart__summary-title">Order Summary</h4>

              {isMobile && (
                <button className={cn("Cart__summary-show-btn", {
                  "is-info": isInfoVisible
                })} onClick={showDetails}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                    <path d="M10.875 8.625L14.625 12L10.875 15.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              )}

              {(!isMobile || (isMobile && isInfoVisible)) && (
                <>
                  <div className="Cart__summary-details">
                    <div className="Cart__summary-col">
                      <span>Subtotal (incl. VAT)</span>
                      <span >Shipping</span>
                    </div>

                    <div className="Cart__summary-col">
                      <span>{totalAmount}&euro; </span>
                      <span>Free</span>
                    </div>
                  </div>

                  <p className="Cart__summary-voucher">I have a gift card or code</p>
                </>
              )}


            </div>

            <div className="Cart__summary-action">

              {(!isMobile || (isMobile && isInfoVisible)) && <div className="Cart__summary-payments"></div>}

              <div className="Cart__summary-subtotal">Subtotal: {totalAmount}&euro;</div>

              <button type="button" className="Cart__summary-checkout-btn">Proceed to checkout</button>
            </div>

            <button type="button" className="Cart__summary-checkout-btn blue"></button>
          </div>

          <div className="Cart__recos">
           { /*TODO: Create recos*/ }
          </div>
        </div>
      </div>
    </div>
  );
};
