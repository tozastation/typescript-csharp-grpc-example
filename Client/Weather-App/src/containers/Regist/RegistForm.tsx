import { Dispatch } from 'redux';
import { registRequest } from 'src/actions/Regist/RegistActionCreator';
import { connect } from 'react-redux';
import RegistForm from 'src/components/Regist/Layout/RegistForm';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { screenStateToLogin, screenStateToRegist } from 'src/actions/ScreenState/ScreenStateActionCreator';
import RegistAction from 'src/actions/Regist/RegistAction';
import { RegistFormDispatchProps } from 'src/components/Regist/Data/RegistFormProps';

const mapDispatchToProps = (
  dispatch: Dispatch<RegistAction | ScreenStateAction>
): RegistFormDispatchProps => ({
  registRequest: (userId: string, password: string, cityName: string, name: string) => dispatch(registRequest(userId, password, cityName, name)),
  goToHome: () => dispatch(screenStateToRegist()),
  goToLogin: () => dispatch(screenStateToLogin()),
  goToRegist: () => dispatch(screenStateToRegist())
});

export default connect(
  null,
  mapDispatchToProps
)(RegistForm);
