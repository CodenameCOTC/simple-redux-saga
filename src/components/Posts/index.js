import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post";

const Posts = ({ posts }) =>
  posts.map(post => <Post post={post} key={post.title} />);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Posts);
