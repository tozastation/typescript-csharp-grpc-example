import { combineReducers } from "redux";
import loginState from './Login/LoginReducer';
import ScreenState from './ScreenState/ScreenStateReducer';
import registState from './Regist/RegistReducer';

const rootReducers = combineReducers({
    loginState,
    ScreenState,
    registState
});

export default rootReducers;