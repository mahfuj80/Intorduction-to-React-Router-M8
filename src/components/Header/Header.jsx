// import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
