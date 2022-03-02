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
  <React.StrictMode>
    <Root store={store}>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
