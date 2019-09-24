import { all, takeLatest } from 'redux-saga/effects';
import { signIn, signUp, auth } from './auth';
import { updateProfile } from './user';
//import { authRequest } from '../actions/auth';
import { 
    SIGNIN_REQUEST, 
    SIGNIN_SUCCESS,
    SIGNUP_REQUEST, 
    UPDATE_PROFILE_REQUEST,
    //AUTH_REQUEST
} from '../actions/types';

export default function* rootSaga() {
    return yield all([
        takeLatest('persist/REHYDRATE', auth),
        //takeLatest(AUTH_REQUEST, auth),
        takeLatest(SIGNIN_REQUEST, signIn),
        takeLatest(SIGNIN_SUCCESS, auth),
        takeLatest(SIGNUP_REQUEST, signUp),
        takeLatest(UPDATE_PROFILE_REQUEST, updateProfile),
        //put(authRequest())
    ]);
}