import api from '../../services/api';
import { all, takeLatest } from 'redux-saga/effects';
import { signIn, signUp } from './auth';
import { updateProfile } from './user';
import { 
    SIGNIN_REQUEST, 
    SIGNUP_REQUEST, 
    UPDATE_PROFILE_REQUEST
} from '../actions/types';

function setToken({ payload }) {
    if (!payload) {
        return;
    }

    const { token } = payload.auth;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest('persist/REHYDRATE', setToken),
        takeLatest(SIGNIN_REQUEST, signIn),
        takeLatest(SIGNUP_REQUEST, signUp),
        takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)
    ]);
}