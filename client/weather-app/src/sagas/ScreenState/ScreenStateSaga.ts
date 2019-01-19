import { put, call, takeEvery} from 'redux-saga/effects';
import { getWeather } from 'src/gRPC/Client/WeatherClient';
import { ScreenStateType } from 'src/states/Screen/ScreenStateType';
import ScreenStateAction from 'src/actions/ScreenState/ScreenStateAction';
import { screenStateToHome, screenStateToLogin } from 'src/actions/ScreenState/ScreenStateActionCreator';
import { GetResponse } from 'src/gRPC/proto/weather_pb';

function* goToHomeRequest(action: ScreenStateAction) {
    const {response}: {response: GetResponse} = yield call(getWeather, "Hakodate");
    const weather = response.getWeather();
    if(weather !== null){
        yield put(screenStateToHome());
    }else{
        yield put(screenStateToLogin());
    }
}

export const ScreenStateSaga = [
   takeEvery(ScreenStateType.HOME_SCREEN, goToHomeRequest)
];