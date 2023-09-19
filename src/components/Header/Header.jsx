// import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to={'/'}>Home</Link>
        <NavLink to={'/users'}>Users</NavLink>
        {/* <Link to={'/users'}>Users</Link> */}
        <NavLink to={'/posts'}>Posts</NavLink>
        {/* <Link to={'/posts'}>Posts</Link> */}
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
