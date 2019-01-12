import * as RegistActions from './RegistAction';
import { RegistActionType } from './RegistActionType';


export const registRequest = (userId: string, password: string, cityName: string, name: string): RegistActions.RegistRequestAction =>({
  type: RegistActionType.REGIST_REQUEST,
  userId,
  password,
  cityName,
  name
});

export const registSucceed = (token: string): RegistActions.RegistSuccededAction => ({
  type: RegistActionType.REGIST_SUCCEDED,
  token,
});

export const registFailed = (): RegistActions.RegistFailedAction => ({
  type: RegistActionType.REGIST_FAILED,
});
