import { useContext, useEffect } from "react";

import { BasketContext, MenuContext } from "./LayerContext";
import { Menu } from "./components/Menu/";
import { Cart } from "./components/Cart/Cart";

import  Header  from './components/Header/Header';
// import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro";
import { Goods } from "./components/Goods";
import { About } from "./components/About/";
import { Customers } from "./components/Customers/";
import { Stores } from "./components/Stores/";
import { Footer } from "./components/Footer/";

import "./App.scss";

export const App = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const { isCartOpen } = useContext(BasketContext);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    isMenuOpen || isCartOpen
      ? document.body.classList.add('body--with-menu')
      : document.body.classList.remove('body--with-menu');
  }, [isMenuOpen, isCartOpen]);


  return (
    <div className="App">
      <div className="container">
        <div className="App__content">
          <Header />

          {isMenuOpen && (
            <Menu />
          )}

          {isCartOpen && (
            <Cart />
          )}

          <main>
            <Intro />
            <Goods />
            <About />
            <Customers />
            <Stores />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};