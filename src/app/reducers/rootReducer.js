import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

console.log("test reducer ", testReducer);

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: formReducer
});

export default rootReducer;
