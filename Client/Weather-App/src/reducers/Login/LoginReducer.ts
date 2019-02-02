import LoginState from '../../states/Login/LoginState';
import LoginAction from '../../actions/Login/LoginAction';
import { LoginActionType } from '../../actions/Login/LoginActionType';

const initialState: LoginState = {cityName: ""};

const loginState = (state: LoginState = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case LoginActionType.LOGIN_SUCCEDED:
      return {
          ...state,
          cityName: action.cityName
      };
    case LoginActionType.LOGIN_FAILED:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default loginState;
