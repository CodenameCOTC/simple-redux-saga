import React from "react";
import PropTypes from "prop-types";

const Post = ({ post }) => <p>{post.title}</p>;

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
