import React from 'react';
import { Link } from 'react-router';

const Header = () =>
  (<div>
    <div className="navbar">
      <ul>
        <li><Link to="explore" activeClassName="active">Explore</Link></li>
        <li><a href="a">About</a></li>
        <li><a href="a">Blog</a></li>
        <li><a href="a">Connect</a></li>
      </ul>
    </div>
  </div>
  );

export default Header;
