import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./redux/reducer";
import rootSagas from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(postsReducer, enhancer);
sagaMiddleware.run(rootSagas);

export default store;
