import React, { useMemo, useState } from 'react';

export const MenuContext = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => { },
});

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(() => ({
    isMenuOpen,
    setIsMenuOpen
  }), [isMenuOpen]);
  
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}

export const BasketContext = React.createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
});

export const BasketProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = useMemo(() => ({
    isCartOpen,
    setIsCartOpen
  }), [isCartOpen]);
  
  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  )
}