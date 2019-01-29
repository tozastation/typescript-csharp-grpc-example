import { put, call, takeEvery} from 'redux-saga/effects';
import { LoginActionType } from 'src/actions/Login/LoginActionType';
import { LoginRequestAction } from 'src/actions/Login/LoginAction';
import { loginSucceed, loginFailed } from 'src/actions/Login/LoginActionCreator';
import * as UserPb from 'src/gRPC/proto/user_pb';

import { login } from 'src/gRPC/Client/UserClient';

function* loginRequest(action: LoginRequestAction) {
    // 自動生成したユーザプロトコルのログインリクエストモデルにを受け取る．
    const {res}: {res: UserPb.LoginResponse} = yield call(login, action.userId, action.password); 
    const cityName = res.getCityname();
    if(cityName){
        yield put(loginSucceed(cityName));
    }else{
        yield put(loginFailed());
    }
}

export const LoginSaga = [
    takeEvery(LoginActionType.LOGIN_REQUEST, loginRequest)
];