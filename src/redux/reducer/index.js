import * as types from "../actions/types";

const initialState = {
  posts: [],
  currentPage: 1,
  isLoading: false,
  error: {},
  status: {
    isLoading: false,
    error: {}
  }
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case types.fetchPosts:
      return {
        ...state,
        isLoading: true,
        error: {}
      };

    case types.fetchPostsSuccess:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        currentPage: state.currentPage + 1,
        isLoading: false,
        error: {}
      };

    case types.fetchPostsFailure:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case types.addPost:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          error: {}
        }
      };

    case types.addPostSuccess:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        status: {
          isLoading: false,
          error: {}
        }
      };

    case types.addPostFailure:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
}
