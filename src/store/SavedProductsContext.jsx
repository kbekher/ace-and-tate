import React from 'react';
import { getItemSaverFunction, useLocalStorage } from '../helpers/utils';

export const FavouritesContext = React.createContext({
  favourites: [],
  changeFavItems: () => { },
});

export const CartContext = React.createContext({
  cartItems: [],
  changeCartItems: () => { },
});

export const SavedItemsProvoder = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cart', []);
  const [favourites, setFavourites] = useLocalStorage('favs', []);
  const changeCartItems = getItemSaverFunction(
    'cart',
    cartItems,
    setCartItems,
  );
  const changeFavItems = getItemSaverFunction(
    'favs',
    favourites,
    setFavourites,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        changeCartItems,
      }}
    >
      <FavouritesContext.Provider
        value={{
          favourites,
          changeFavItems,
        }}
      >
        {children}
      </FavouritesContext.Provider>
    </CartContext.Provider>
  );
};
