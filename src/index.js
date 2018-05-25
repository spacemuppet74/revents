import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 9c48282a432cf718555711c11c267dfa1f4eba63
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./app/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";

const el = document.getElementById("root");
const store = configureStore();

const render = () => {
  ReactDOM.render(
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>, el);
=======
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    el
  );
>>>>>>> 9c48282a432cf718555711c11c267dfa1f4eba63
};

if (module.hot) {
  module.hot.accept("./app/layout/App.js", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
