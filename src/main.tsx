import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App2 from "./App2";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <App2 /> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
