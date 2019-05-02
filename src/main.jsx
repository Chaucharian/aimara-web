import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import configureStore from './store/storeConfig.dev';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root'));
