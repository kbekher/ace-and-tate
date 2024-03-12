import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Goods } from "./components/Goods";

import "./App.scss";

export const App = () => {

  return (
    <div className="App">
      <div className="container">
        <div className="App__content">
          <Header />

          {/* {isMenuOpen && (
            <Menu />
          )} */}

          {/* {isBasketOpen && (
            <Basket />
          )} */}

          <main>
            <Intro />
            <Goods />
            {/* <About />
            <Customers />
            <Stores /> */}
          </main>

          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};