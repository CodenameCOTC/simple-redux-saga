import { takeLatest, put, call, delay, all, fork } from "redux-saga/effects";
import * as types from "../actions/types";
import * as actions from "../actions";
import { fetchPostsApi, addPostApi } from "../api";

export function* fetchPosts({ currentPage }) {
  try {
    yield delay(500);
    const posts = yield call(fetchPostsApi, currentPage);
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(actions.fetchPostsFailure(error));
  }
}

export function* watcherFetchPost() {
  yield takeLatest(types.fetchPosts, fetchPosts);
}

export function* addPost({ data }) {
  try {
    yield delay(500);
    const post = yield call(addPostApi, data);
    yield put(actions.addPostSuccess(post));
  } catch (error) {
    console.log(error);
    yield put(actions.addPostFailure(error));
  }
}

export function* watcherAddPost() {
  yield takeLatest(types.addPost, addPost);
}

export default function* rootSaga() {
  yield all([fork(watcherFetchPost), fork(watcherAddPost)]);
}
