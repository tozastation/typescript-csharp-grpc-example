import * as ScreenStateActions from './ScreenStateAction';
import { ScreenStateActionType } from './ScreenStateActionType';


export const screenStateToHome = (): ScreenStateActions.ScreenStateToHomeAction => ({
  type: ScreenStateActionType.GO_TO_HOME,
});

export const screenStateToLogin = (): ScreenStateActions.ScreenStateToLoginAction => ({
    type: ScreenStateActionType.GO_TO_LOGIN,
});
