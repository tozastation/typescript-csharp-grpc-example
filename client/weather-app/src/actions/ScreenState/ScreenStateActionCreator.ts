import * as ScreenStateActions from './ScreenStateAction';
import { ScreenStateActionType } from './ScreenStateActionType';


export const screenStateToHome = (
  id: number,
  cityName: string,
  tempMax: number,
  tempMin: number,
  wind: number,
  typeWeather: string,
  description: string
  ): ScreenStateActions.ScreenStateToHomeAction => ({
  type: ScreenStateActionType.GO_TO_HOME,
  id,
  cityName,
  tempMax,
  tempMin,
  wind,
  typeWeather,
  description
});

export const screenStateToLogin = (): ScreenStateActions.ScreenStateToLoginAction => ({
    type: ScreenStateActionType.GO_TO_LOGIN,
});

export const screenStateToRegist = (): ScreenStateActions.ScreenStateToRegistAction => ({
  type: ScreenStateActionType.GO_TO_REGIST,
});

export const screenStateToHomeRequest = (): ScreenStateActions.ScreenStateToHomeRequestAction => ({
  type: ScreenStateActionType.GO_TO_HOME_REQUEST,
});
