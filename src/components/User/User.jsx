// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: '2px solid yellow',
    padding: '5px',
    borderRadius: '20px',
  };
  return (
    <div style={userStyle}>
      <h1>{name}</h1>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
