import { ScreenStateActionType } from './ScreenStateActionType';

export interface ScreenStateToLoginAction {
  type: ScreenStateActionType.GO_TO_LOGIN
}

export interface ScreenStateToHomeAction {
  type: ScreenStateActionType.GO_TO_HOME
}

export interface ScreenStateToRegistAction {
  type: ScreenStateActionType.GO_TO_REGIST
}

type ScreenStateAction = ScreenStateToHomeAction | ScreenStateToLoginAction | ScreenStateToRegistAction ;
export default ScreenStateAction;
