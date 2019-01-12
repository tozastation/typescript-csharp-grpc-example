import { combineReducers } from "redux";
import loginState from './Login/LoginReducer';

const rootReducers = combineReducers({
    loginState
});

export default rootReducers;