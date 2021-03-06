import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./state";
import { BrowserRouter } from "react-router-dom";
// import "./i18next";

ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//   <Suspense fallback={<div>Loading ~~~~</div>}>
//     <App state={state} />
//   </Suspense>,
//   document.getElementById("root")
// );
