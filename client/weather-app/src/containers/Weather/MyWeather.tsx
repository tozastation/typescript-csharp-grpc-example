import { connect } from 'react-redux';
import {StateType} from 'typesafe-actions';
import rootReducers from '../../reducers';
import WeatherState from 'src/states/Screen/WeatherState';
import MyWeather from 'src/components/Weather/Layout/MyWeather';

type RootType = StateType<typeof rootReducers>;

const mapStateToProps = (state:RootType): WeatherState => ({
    id: state.ScreenState.id,
    cityName: state.ScreenState.cityName,
    tempMax: state.ScreenState.tempMax,
    tempMin: state.ScreenState.tempMin,
    description: state.ScreenState.description,
    wind: state.ScreenState.wind,
    typeWeather: state.ScreenState.typeWeather
})

export default connect(
  mapStateToProps,
  null
)(MyWeather);
