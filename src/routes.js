import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePageComponent';
import CategoryPage from './components/CategoryPage/CategoryPageComponent';
import GearItemPage from './components/GearItemPage/GearItemPageComponent';
import BookingPage from './components/BookingPage/BookingPageComponent';

/**
 * Defines project routes.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/category/:gearCat" component={CategoryPage} />
    <Route path="/gear/:gearItemId" component={GearItemPage} />
    <Route path="/booking/:gearItemId" component={BookingPage} />
  </Route>
);
