import { takeLatest, put, call, delay } from "redux-saga/effects";
import * as types from "../actions/types";
import * as actions from "../actions";
import { fetchPostsApi } from "../api";

export function* fetchPosts() {
  try {
    yield delay(500);
    const posts = yield call(fetchPostsApi);
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(actions.fetchPostsFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(types.fetchPosts, fetchPosts);
}
