import { put, call, takeEvery} from 'redux-saga/effects';
import { LoginActionType } from 'src/actions/Login/LoginActionType';
import { LoginRequestAction } from 'src/actions/Login/LoginAction';
import { loginSucceed, loginFailed } from 'src/actions/Login/LoginActionCreator';
// import { getUser } from 'src/gRPC/Client/UserClient';
// import { GetResponse } from 'src/gRPC/proto/user_pb';
import * as WeatherPb from 'src/gRPC/proto/weather_pb';

import { getWeather } from 'src/gRPC/Client/WeatherClient';

function* loginRequest(action: LoginRequestAction) {
    // const {userId} = action;
    const {res}: {res: WeatherPb.GetResponse} = yield call(getWeather, 'Hakodate'); // <- gRPCに変更
    const weather = res.getWeather()
    // const cityName = user.getCityname();
    if(weather){
        yield put(loginSucceed(weather.getCityname()));
    }else{
        yield put(loginFailed());
    }
}

export const LoginSaga = [
    takeEvery(LoginActionType.LOGIN_REQUEST, loginRequest)
];