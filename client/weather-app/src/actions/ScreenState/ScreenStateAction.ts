import { ScreenStateActionType } from './ScreenStateActionType';

export interface ScreenStateToLoginAction {
  type: ScreenStateActionType.GO_TO_LOGIN
}

export interface ScreenStateToHomeAction {
  type: ScreenStateActionType.GO_TO_HOME,
  id: number,
  cityName: string,
  tempMax: number,
  tempMin: number,
  wind: number,
  typeWeather: string,
  description: string
}

export interface ScreenStateToRegistAction {
  type: ScreenStateActionType.GO_TO_REGIST
}

export interface ScreenStateToHomeRequestAction {
  type: ScreenStateActionType.GO_TO_HOME_REQUEST
}

type ScreenStateAction = ScreenStateToHomeAction | ScreenStateToLoginAction | ScreenStateToRegistAction | ScreenStateToHomeRequestAction;
export default ScreenStateAction;
