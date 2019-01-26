// import { put, call, takeEvery} from 'redux-saga/effects';
// import { WeatherActionType } from 'src/actions/Weather/WeatherActionType';
// import { WeatherRequestAction } from 'src/actions/Weather/WeatherAction';
// import { weatherSucceed, weatherFailed } from 'src/actions/Weather/WeatherActionCreator';
// import * as WeatherPb from 'src/gRPC/proto/weather_pb';
// import { getWeather } from 'src/gRPC/Client/WeatherClient';

// function* weatherRequest(action: WeatherRequestAction) {
//     const {res}: {res: WeatherPb.GetResponse} = yield call(getWeather, 'Hakodate'); // <- gRPCに変更
//     const weather = res.getWeather()
//     if(weather){
//         yield put(weatherSucceed(weather.getCityname()));
//     }else{
//         yield put(weatherFailed());
//     }
// }

// export const WeatherSaga = [
//    takeEvery(WeatherActionType.WEATHER_REQUEST, weatherRequest)
// ];