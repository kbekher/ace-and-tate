import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Menu } from './components/Menu';
// import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
// import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="products">
        {/* <Route path=":productId" element={<ProductDetailsPage />} /> */}
      </Route>

      {/* <Route path="stores" element={<StoresPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="eyetest" element={<EyeTestPage />} /> */}

      {/* <Route path="tablets">
        <Route index element={<TabletsPage />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
      </Route> */}


      <Route path="cart" element={<CartPage />} />

      <Route path="menu" element={<Menu />} />

    </Route>
  </Routes>
);
