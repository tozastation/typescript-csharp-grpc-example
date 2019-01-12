import { Dispatch } from 'redux';
import LoginAction from 'src/actions/Login/LoginAction';
import { LoginFormDispatchProps } from 'src/components/Login/Data/LoginFormProps';
import { loginRequest } from 'src/actions/Login/LoginActionCreator';
import { connect } from 'react-redux';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { screenStateToHome, screenStateToLogin } from 'src/actions/ScreenState/ScreenStateActionCreator';
import App, { AppConnectedProps } from './App';
import {StateType} from 'typesafe-actions';
import rootReducers from './reducers';

type RootType = StateType<typeof rootReducers>;

const mapStateToProps = (state:RootType): AppConnectedProps => ({
    screenState: state.ScreenState
})
const mapDispatchToProps = (
  dispatch: Dispatch<LoginAction | ScreenStateAction>
): LoginFormDispatchProps => ({
  loginRequest: (userId: string, password: string) => dispatch(loginRequest(userId, password)),
  goToHome: () => dispatch(screenStateToHome()),
  goToLogin: () => dispatch(screenStateToLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
