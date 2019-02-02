import { connect } from 'react-redux';
import MyWeather from '../../components/Weather/Layout/MyWeather';
import { Dispatch } from 'redux';
import ScreenStateAction from '../../actions/ScreenState/ScreenStateAction';
import { WeatherDispatchProps } from '../../components/Weather/Data/WeatherProps';
import { screenStateToRegist, screenStateToLogin, screenStateToHome } from '../../actions/ScreenState/ScreenStateActionCreator';
import { weatherRequest } from '../../actions/Weather/WeatherActionCreator';
import WeatherAction from '../../actions/Weather/WeatherAction';

const mapDispatchToProps = (
  dispatch: Dispatch<WeatherAction | ScreenStateAction>
): WeatherDispatchProps => ({
  weatherRequest: (cityName: string) => dispatch(weatherRequest(cityName)),
  goToHome: () => dispatch(screenStateToHome()),
  goToLogin: () => dispatch(screenStateToLogin()),
  goToRegist: () => dispatch(screenStateToRegist())
});

export default connect(
  null,
  mapDispatchToProps
)(MyWeather);
