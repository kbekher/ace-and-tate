import { Outlet, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import { Footer } from "./components/Footer/";

import "./App.scss";

export const App = () => {
  const location = useLocation();

  return (
    <div className="App" id="App">
      <div className="container">
        <div className="App__content">

          <Header />
          <main>
            <Outlet />
          </main>

          {location.pathname !== '/menu' && (
            <Footer />
          )}

        </div>
      </div>
    </div>
  );
};

