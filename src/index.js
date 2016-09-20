import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

render(
  <div>
    <div className="navbar">
      <ul>
        <li><a href="a">Explore</a></li>
        <li><a href="a">About</a></li>
        <li><a href="a">Blog</a></li>
        <li><a href="a">Connect</a></li>
      </ul>
      <h1>Kenzan</h1>
    </div>
  </div>,
  document.getElementById('app')
);
