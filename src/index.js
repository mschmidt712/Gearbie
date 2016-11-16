import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { getAllCategories } from './actions/categoryActions';
import { getUser } from './actions/userActions';
// import { getPopularItems } from './actions/authorActions';
import routes from './routes';

/**
 * Maps the projects files to the index.html app container.
 */

const store = configureStore();
store.dispatch(getAllCategories());
store.dispatch(getUser());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
