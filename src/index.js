import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "./index.css";
import App from "./App";
import Root from "./components/Root";
import configureStore from "./store";

const history = createBrowserHistory();
const store = configureStore({ history });
ReactDOM.render(
  <Root store={store} history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Root>,
  document.getElementById("root")
);
