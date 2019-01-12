import { LoginActionType } from './LoginActionType';

export interface LoginRequestAction {
  type: LoginActionType.LOGIN_REQUEST;
  userId: string;
  password: string;
}

export interface LoginSuccededAction {
  type: LoginActionType.LOGIN_SUCCEDED;
  cityName: string;
}

export interface LoginFailedAction {
  type: LoginActionType.LOGIN_FAILED;
}

type LoginAction = LoginRequestAction | LoginSuccededAction | LoginFailedAction;
export default LoginAction;
