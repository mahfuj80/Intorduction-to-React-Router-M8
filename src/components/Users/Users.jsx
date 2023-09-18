// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css';
const Users = () => {
  const users = useLoaderData();
  // state--> data
  // state --> loader
  // use effect
  // fetch --> state set ---> set state
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Fantastic and vodro users</p>
      <div className="users">
        {users.map((user) => (
          <User key={user?.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;
