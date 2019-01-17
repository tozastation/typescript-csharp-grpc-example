import {all} from 'redux-saga/effects';
import { LoginSaga } from './Login/LoginSaga';
import { ScreenStateSaga } from './ScreenState/ScreenStateSaga';
import { RegistSaga } from './Regist/RegistSaga';

export default function* rootSaga() {
    yield all([
        ...LoginSaga,
        ...ScreenStateSaga,
        ...RegistSaga
    ]);
}