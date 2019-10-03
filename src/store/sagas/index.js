import { all, takeLatest } from 'redux-saga/effects';
import { signIn, signUp, auth } from './auth';
import { updateProfile } from './user';
import history from '../../services/history';
import { 
    SIGNIN_REQUEST, 
    SIGNIN_SUCCESS,
    SIGNUP_REQUEST, 
    UPDATE_PROFILE_REQUEST,
    SIGN_OUT
} from '../actions/types';

export function signOut() {
    history.push('/');
}

export default function* rootSaga() {
    return yield all([
        takeLatest('persist/REHYDRATE', auth),
        takeLatest(SIGNIN_REQUEST, signIn),
        takeLatest(SIGNIN_SUCCESS, auth),
        takeLatest(SIGNUP_REQUEST, signUp),
        takeLatest(UPDATE_PROFILE_REQUEST, updateProfile),
        takeLatest(SIGN_OUT, signOut)
    ]);
}