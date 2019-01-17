import { Dispatch } from 'redux';
import LoginAction from 'src/actions/Login/LoginAction';
import { LoginFormDispatchProps } from 'src/components/Login/Data/LoginFormProps';
import { loginRequest } from 'src/actions/Login/LoginActionCreator';
import { connect } from 'react-redux';
import LoginForm from 'src/components/Login/Layout/LoginForm';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import {screenStateToHomeRequest, screenStateToLogin, screenStateToRegist } from 'src/actions/ScreenState/ScreenStateActionCreator';

const mapDispatchToProps = (
  dispatch: Dispatch<LoginAction | ScreenStateAction>
): LoginFormDispatchProps => ({
  loginRequest: (userId: string, password: string) => dispatch(loginRequest(userId, password)),
  goToHome: () => dispatch(screenStateToHomeRequest()),
  goToLogin: () => dispatch(screenStateToLogin()),
  goToRegist: () => dispatch(screenStateToRegist())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
