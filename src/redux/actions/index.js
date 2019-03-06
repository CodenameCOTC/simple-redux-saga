import * as types from "./types";

export const fetchPosts = currentPage => ({
  type: types.fetchPosts,
  currentPage
});

export const fetchPostsSuccess = posts => ({
  type: types.fetchPostsSuccess,
  posts
});

export const fetchPostsFailure = error => ({
  type: types.fetchPostsFailure,
  error
});
