import React from 'react';
import { Provider } from 'react-redux';
import createReduxStore from './store';

import Main from './components/Main/Main';

const store = createReduxStore();

function App() {
  return(
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;