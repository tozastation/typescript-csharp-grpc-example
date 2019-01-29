import { RegistActionType } from './RegistActionType';

export interface RegistRequestAction {
  type: RegistActionType.REGIST_REQUEST;
  userId: string;
  password: string;
  cityName: string;
  name: string;
}

export interface RegistSuccededAction {
  type: RegistActionType.REGIST_SUCCEDED;
  token: string;
}

export interface RegistFailedAction {
  type: RegistActionType.REGIST_FAILED;
}

type RegistAction = RegistRequestAction | RegistSuccededAction | RegistFailedAction;
export default RegistAction;
