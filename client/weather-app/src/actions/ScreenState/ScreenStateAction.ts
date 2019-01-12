import { ScreenStateActionType } from './ScreenStateActionType';


export interface ScreenStateToLoginAction {
  type: ScreenStateActionType.GO_TO_LOGIN
}

export interface ScreenStateToHomeAction {
  type: ScreenStateActionType.GO_TO_HOME
}

type ScreenStateAction = ScreenStateToHomeAction | ScreenStateToLoginAction;
export default ScreenStateAction;
