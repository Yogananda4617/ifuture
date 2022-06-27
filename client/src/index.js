// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { reducers } from './reducers';
// import App from './admin';

// import './index.css';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./routers"

ReactDOM.render(
  <React.StrictMode>
    <Routers/>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

