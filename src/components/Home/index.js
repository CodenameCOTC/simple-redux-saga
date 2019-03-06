import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions";
import Posts from "../Posts";

const Home = props => (
  <div>
    <button onClick={() => props.fetchPosts()}>Fetch Posts</button>
    {props.isLoading && <p>Loading...</p>}
    <Posts />
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
