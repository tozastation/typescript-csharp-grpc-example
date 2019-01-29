import * as LoginActions from './LoginAction';
import { LoginActionType } from './LoginActionType';


export const loginRequest = (userId: string, password: string): LoginActions.LoginRequestAction => ({
  type: LoginActionType.LOGIN_REQUEST,
  userId,
  password,
});

export const loginSucceed = (cityName: string): LoginActions.LoginSuccededAction => ({
  type: LoginActionType.LOGIN_SUCCEDED,
  cityName,
});

export const loginFailed = (): LoginActions.LoginFailedAction => ({
  type: LoginActionType.LOGIN_FAILED,
});
