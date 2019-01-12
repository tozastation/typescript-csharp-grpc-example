import { put, call, takeEvery} from 'redux-saga/effects';
import { LoginActionType } from 'src/actions/Login/LoginActionType';
import { LoginRequestAction } from 'src/actions/Login/LoginAction';
import { loginSucceed, loginFailed } from 'src/actions/Login/LoginActionCreator';

function* loginRequest(action: LoginRequestAction) {
    const {cityName} = yield call(mockApi);
    if(cityName !== ""){
        yield put(loginSucceed(cityName));
    }else{
        yield put(loginFailed());
    }
}

export const LoginSaga = [
   takeEvery(LoginActionType.LOGIN_REQUEST, loginRequest)
];