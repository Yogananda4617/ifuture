import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './user/reducers';
import User from './user/user';
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function UserApp(){
    return(
        <Provider store={store}>
            <User />
        </Provider>
    )
}
export default UserApp;