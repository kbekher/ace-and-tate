import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';

import { Root } from './Root';
import { SavedItemsProvoder } from './store/SavedProductsContext';

ReactDOM.render(
  <SavedItemsProvoder>
    <Router>
      <Root />
    </Router>
  </SavedItemsProvoder>,
  document.getElementById('root'),
);
