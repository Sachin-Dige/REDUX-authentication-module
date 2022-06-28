import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import { loginReducer } from "./REDUX/Reducer/loginReducer";
import { registerReducer } from "./REDUX/Reducer/registerReducer";

const rootreducer = combineReducers({
   userList: loginReducer, registerReducer
});

const intialState = {};

const middleware = [thunk]

const store = createStore(
    rootreducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;