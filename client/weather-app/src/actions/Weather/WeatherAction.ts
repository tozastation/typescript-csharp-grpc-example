import { WeatherActionType } from './WeatherActionType';

export interface WeatherRequestAction {
  type: WeatherActionType.WEATHER_REQUEST;
  cityName: string;
}

export interface WeatherSuccededAction {
  type: WeatherActionType.WEATHER_SUCCEDED;
}

export interface WeatherFailedAction {
  type: WeatherActionType.WEATHER_FAILED;
}

type WeatherAction = WeatherRequestAction | WeatherSuccededAction | WeatherFailedAction;
export default WeatherAction;
