import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App.js';

class Main extends React.Component {
  render() {
    return <App sx={{ m: 0, p:0 }}/>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
