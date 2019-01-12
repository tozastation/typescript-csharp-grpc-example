import {all} from 'redux-saga/effects';
import { LoginSaga } from './Login/LoginSaga';

export default function* rootSaga() {
    yield all([
        ...LoginSaga
    ]);
}