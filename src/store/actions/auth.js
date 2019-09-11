import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from './types';

export function signInRequest(mail, password) {
    return {
        type: SIGNIN_REQUEST,
        payload: { mail, password }
    }
}

export function signInSuccess(token, user) {
    return {
        type: SIGNIN_SUCCESS,
        payload: { token, user }
    }
}