// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h3>Post Details about: {id}</h3>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

PostDetails.propTypes = {};

export default PostDetails;
