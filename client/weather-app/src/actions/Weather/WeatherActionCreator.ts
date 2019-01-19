import * as WeatherActions from './WeatherAction';
import { WeatherActionType } from './WeatherActionType';


export const weatherRequest = (cityName: string): WeatherActions.WeatherRequestAction => ({
  type: WeatherActionType.WEATHER_REQUEST,
  cityName,
});

export const weatherSucceed = (): WeatherActions.WeatherSuccededAction => ({
  type: WeatherActionType.WEATHER_SUCCEDED,
});

export const weatherFailed = (): WeatherActions.WeatherFailedAction => ({
  type: WeatherActionType.WEATHER_FAILED,
});
