import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import OpenSourcePage from './components/explore/OpenSourcePage';
import TechRadarPage from './components/explore/TechRadarPage';
import KenzanAboutPage from './components/about/KenzanAboutPage';
import LearnAboutPage from './components/about/LearnAboutPage';
import ConnectPage from './components/connect/ConnectPage';

/**
 * Defines project routes.
 */
export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="open-source" component={OpenSourcePage} />
      <Route path="tech-radar" component={TechRadarPage} />
      <Route path="kenzan" component={KenzanAboutPage} />
      <Route path="learn" component={LearnAboutPage} />
      <Route path="connect" component={ConnectPage} />
    </Route>
  </Router>
);
