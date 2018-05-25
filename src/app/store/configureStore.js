import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = preloadedStore => {
  const middleware = [];
  const middleEnhancer = applyMiddleware(...middleware);

  const storeEnhancer = [middleEnhancer];

  const composeEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, preloadedStore, composeEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/rootReducer", () => {
        const newReducer = require("../reducers/rootReducer").default;
        store.replaceReducer(newReducer);
      });
    }
  }

  return store;
};

export default configureStore;
