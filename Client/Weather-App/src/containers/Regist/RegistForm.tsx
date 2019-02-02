import { Dispatch } from 'redux';
import { registRequest } from '../../actions/Regist/RegistActionCreator';
import { connect } from 'react-redux';
import RegistForm from '../../components/Regist/Layout/RegistForm';
import ScreenStateAction from '../../actions/ScreenState/ScreenStateAction';
import { screenStateToLogin, screenStateToRegist } from '../../actions/ScreenState/ScreenStateActionCreator';
import RegistAction from '../../actions/Regist/RegistAction';
import { RegistFormDispatchProps } from '../../components/Regist/Data/RegistFormProps';

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
