import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './admin/reducers';
import Admin from './admin/admin';
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function AdminApp(){
    return(
        <Provider store={store}>
            <Admin />
        </Provider>
    )
}
export default AdminApp;