import { put, call, takeEvery} from 'redux-saga/effects';
import { RegistRequestAction } from 'src/actions/Regist/RegistAction';
import { PostResponse } from 'src/gRPC/proto/user_pb';
import { postUser } from 'src/gRPC/Client/UserClient';
import { registSucceed, registFailed } from 'src/actions/Regist/RegistActionCreator';
import { RegistActionType } from 'src/actions/Regist/RegistActionType';

function* registRequest(action: RegistRequestAction) {
    const {userId, cityName, password, name} = action;
    const {response}: {response: PostResponse} = yield call(postUser, userId, cityName, password, name);
    const token = response.getToken();
    if(token !== ""){
        yield put(registSucceed(token));
    }else{
        yield put(registFailed());
    }
}

export const RegistSaga = [
    takeEvery(RegistActionType.REGIST_REQUEST ,registRequest)
];