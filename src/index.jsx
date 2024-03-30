import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BasketProvider, MenuProvider } from './LayerContext';
import { SavedItemsProvoder } from './SavedProductsContext';
import { App } from './App';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <StrictMode>
    <SavedItemsProvoder>
      <BasketProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </BasketProvider>
    </SavedItemsProvoder>
  </StrictMode>
);