import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from './products.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';

const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer
})

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default createReduxStore;
