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