import { combineReducers } from "redux";
import loginState from './Login/LoginReducer';
import ScreenState from './ScreenState/ScreenStateReducer';

const rootReducers = combineReducers({
    loginState,
    ScreenState
});

export default rootReducers;