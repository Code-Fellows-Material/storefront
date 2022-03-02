import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import stateReducer from './store.js';

const reducers = combineReducers({
  state: stateReducer
})

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;
