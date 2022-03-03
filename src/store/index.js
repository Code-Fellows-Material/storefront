import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from './products.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';

const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer
})

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;
