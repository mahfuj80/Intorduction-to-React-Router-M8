// import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, phone } = user;
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
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
