import React from "react";
import PropTypes from "prop-types";

const Post = ({ post }) => (
  <>
    <li>{post.title}</li>
  </>
);

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
