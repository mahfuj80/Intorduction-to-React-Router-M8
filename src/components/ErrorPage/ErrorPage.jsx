// import React from 'react';
// import PropTypes from 'prop-types';

import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back where you from</p>
          <Link to={'/'}>
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
