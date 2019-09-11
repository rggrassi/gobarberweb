import { all, takeLatest, take } from 'redux-saga/effects';
import { signIn } from './auth';
import { SIGNIN_REQUEST } from '../actions/types';

export default function* rootSaga() {
    return yield all([
        takeLatest(SIGNIN_REQUEST, signIn),
    ]);
}