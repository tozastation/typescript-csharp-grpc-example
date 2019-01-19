import { connect } from 'react-redux';
import MyWeather from 'src/components/Weather/Layout/MyWeather';
import { Dispatch } from 'redux';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { WeatherDispatchProps } from 'src/components/Weather/Data/WeatherProps';
import { screenStateToRegist, screenStateToLogin, screenStateToHome } from 'src/actions/ScreenState/ScreenStateActionCreator';
import { weatherRequest } from 'src/actions/Weather/WeatherActionCreator';
import WeatherAction from 'src/actions/Weather/WeatherAction';

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
