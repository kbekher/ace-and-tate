import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MenuProvider } from './MenuContext';
import { App } from './App';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>
);