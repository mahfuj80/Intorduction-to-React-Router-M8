// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>This is the home component</h1>
      <Outlet></Outlet>
    </div>
  );
};

Home.propTypes = {};

export default Home;
