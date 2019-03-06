import * as types from "./types";

export const fetchPosts = () => ({ type: types.fetchPosts });

export const fetchPostsSuccess = posts => ({
  type: types.fetchPostsSuccess,
  posts
});

export const fetchPostsFailure = error => ({
  type: types.fetchPostsFailure,
  error
});
