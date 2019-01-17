import RegistState from 'src/states/Regist/RegistState';
import RegistAction from 'src/actions/Regist/RegistAction';
import { RegistActionType } from 'src/actions/Regist/RegistActionType';

const initialState: RegistState = {token: ""};

const registState = (state: RegistState = initialState, action: RegistAction): RegistState => {
  switch (action.type) {
    case RegistActionType.REGIST_SUCCEDED:
      return {
          ...state,
          token: action.token
      };
    case RegistActionType.REGIST_FAILED:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default registState;
