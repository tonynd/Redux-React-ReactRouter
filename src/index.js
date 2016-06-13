import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Reducers from './reducers/root.reducer';
import App from './components/app.react';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(<Provider store={createStoreWithMiddleware(Reducers)}><App /></Provider>, document.getElementById('container'));
