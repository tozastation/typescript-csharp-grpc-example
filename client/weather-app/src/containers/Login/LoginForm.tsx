import { Dispatch } from 'redux';
import LoginAction from 'src/actions/Login/LoginAction';
import { LoginFormDispatchProps } from 'src/components/Login/Data/LoginFormProps';
import { loginRequest } from 'src/actions/Login/LoginActionCreator';
import { connect } from 'react-redux';
import LoginForm from 'src/components/Login/Layout/LoginForm';

const mapDispatchToProps = (
  dispatch: Dispatch<LoginAction>
): LoginFormDispatchProps => ({
  loginRequest: (userId: string, password: string) => dispatch(loginRequest(userId, password))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
