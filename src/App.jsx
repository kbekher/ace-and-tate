import { useContext, useEffect } from "react";

import { MenuContext } from "./MenuContext";
import { Menu } from "./components/Menu/";

import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Goods } from "./components/Goods";
import { About } from "./components/About/";
import { Customers } from "./components/Customers/";
import { Stores } from "./components/Stores/";
import { Footer } from "./components/Footer/";

import "./App.scss";

export const App = () => {
  const { isMenuOpen } = useContext(MenuContext);

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
    isMenuOpen
      ? document.body.classList.add('body--with-menu')
      : document.body.classList.remove('body--with-menu');
  }, [isMenuOpen]);


  return (
    <div className="App">
      <div className="container">
        <div className="App__content">
          <Header />

          {isMenuOpen && (
            <Menu />
          )}

          {/* {isBasketOpen && (
            <Basket />
          )} */}

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