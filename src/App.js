import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./components/Home";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
