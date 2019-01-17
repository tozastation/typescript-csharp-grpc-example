import { put, call, takeEvery} from 'redux-saga/effects';
import { LoginActionType } from 'src/actions/Login/LoginActionType';
import { LoginRequestAction } from 'src/actions/Login/LoginAction';
import { loginSucceed, loginFailed } from 'src/actions/Login/LoginActionCreator';
import { getUser } from 'src/gRPC/Client/UserClient';
import { GetResponse } from 'src/gRPC/proto/user_pb';

function* loginRequest(action: LoginRequestAction) {
    const {userId, password} = action;
    const {response}: {response: GetResponse} = yield call(getUser, userId, password); // <- gRPCに変更
    const user = response.getUser();
    const cityName = user.getCityname();
    if(cityName !== ""){
        yield put(loginSucceed(cityName));
    }else{
        yield put(loginFailed());
    }
}

export const LoginSaga = [
    takeEvery(LoginActionType.LOGIN_REQUEST, loginRequest)
];