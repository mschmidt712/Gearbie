import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import OpenSourcePage from './components/explore/OpenSourcePage';
import TechRadarPage from './components/explore/TechRadarPage';
import KenzanAboutPage from './components/about/KenzanAboutPage';
import LearnAboutPage from './components/about/LearnAboutPage';
import BlogPage from './components/blog/BlogPage';
import ConnectPage from './components/connect/ConnectPage';
import PageNotFound from './components/pageNotFound/PageNotFoundComponent';

/**
 * Defines project routes.
 */
export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="open-source/" component={OpenSourcePage} />
    <Route path="tech-radar/" component={TechRadarPage} />
    <Route path="kenzan/" component={KenzanAboutPage} />
    <Route path="learn/" component={LearnAboutPage} />
    <Route path="blog/" component={BlogPage} />
    <Route path="connect/" component={ConnectPage} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
