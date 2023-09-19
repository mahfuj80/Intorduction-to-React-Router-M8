// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();
  console.log(postId);
  const { id, title, body } = post;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Post Details about: {id}</h3>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

PostDetails.propTypes = {};

export default PostDetails;
