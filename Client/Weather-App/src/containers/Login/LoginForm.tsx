import { Dispatch } from 'redux';
import LoginAction from '../../actions/Login/LoginAction';
import { LoginFormDispatchProps } from 'src/components/Login/Data/LoginFormProps';
import { loginRequest } from '../../actions/Login/LoginActionCreator';
import { connect } from 'react-redux';
import LoginForm from '../../components/Login/Layout/LoginForm';
import ScreenStateAction from '../../actions/ScreenState/ScreenStateAction';
import {screenStateToLogin, screenStateToRegist, screenStateToHome } from '../../actions/ScreenState/ScreenStateActionCreator';

const mapDispatchToProps = (
  dispatch: Dispatch<LoginAction | ScreenStateAction>
): LoginFormDispatchProps => ({
  loginRequest: (userId: string, password: string) => dispatch(loginRequest(userId, password)),
  goToHome: () => dispatch(screenStateToHome()),
  goToLogin: () => dispatch(screenStateToLogin()),
  goToRegist: () => dispatch(screenStateToRegist())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
