import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import OpenSourcePage from './components/explore/OpenSourcePage';
import TechRadarPage from './components/explore/TechRadarPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="explore">
      <Route path="open-source" component={OpenSourcePage} />
      <Route path="tech-radar" component={TechRadarPage} />
    </Route>
  </Route>
);
