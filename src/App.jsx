import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import { Footer } from "./components/Footer/";

import "./App.scss";

export const App = () => {
  // const { isMenuOpen } = useContext(MenuContext);
  // const { isCartOpen } = useContext(BasketContext);

  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual';
  // }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  // useEffect(() => {
  //   isMenuOpen || isCartOpen
  //     ? document.body.classList.add('body--with-menu')
  //     : document.body.classList.remove('body--with-menu');
  // }, [isMenuOpen, isCartOpen]);


  return (
    <div className="App" id="App">
      <div className="container">
        <div className="App__content">

          {/* {isMenuOpen && (
            <Menu />
          )}

          {isCartOpen && (
            <Cart />
          )} */}


          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

