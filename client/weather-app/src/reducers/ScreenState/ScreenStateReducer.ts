import { ScreenStateType } from 'src/states/Screen/ScreenStateType';
import ScreenState from 'src/states/Screen/ScreenState';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { ScreenStateActionType } from 'src/actions/ScreenState/ScreenStateActionType';

const initialState: ScreenState = {screenType: ScreenStateType.LOGIN_SCREEN}

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
        screenType: ScreenStateType.HOME_SCREEN
      };
    default:
      return state;
  }
};

export default ScreenState;
