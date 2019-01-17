import { ScreenStateType } from 'src/states/Screen/ScreenStateType';
import ScreenState from 'src/states/Screen/ScreenState';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { ScreenStateActionType } from 'src/actions/ScreenState/ScreenStateActionType';

const initialState: ScreenState = {
  screenType: ScreenStateType.LOGIN_SCREEN,
  id: 0,
  cityName: "",
  tempMax: 0,
  tempMin: 0,
  wind: 0,
  typeWeather: "",
  description: ""
}

const ScreenState = (state: ScreenState = initialState, action: ScreenStateAction): ScreenState => {
  switch (action.type) {
    case ScreenStateActionType.GO_TO_LOGIN:
      return {
        ...state,
        ...initialState
      };
    case ScreenStateActionType.GO_TO_HOME:
      return {
        ...state,
        screenType: ScreenStateType.HOME_SCREEN,
        id: action.id,
        cityName: action.cityName,
        tempMax: action.tempMax,
        tempMin: action.tempMin,
        wind: action.wind,
        typeWeather: action.typeWeather,
        description: action.description
      };
    case ScreenStateActionType.GO_TO_REGIST:
      return {
        ...state,
        screenType: ScreenStateType.REGIST_SCREEN
      };
    default:
      return state;
  }
};

export default ScreenState;
