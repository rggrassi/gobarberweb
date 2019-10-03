import { 
    SIGNIN_REQUEST, 
    SIGNIN_SUCCESS, 
    SIGNIN_FAILURE, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE,
    SIGN_OUT,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE
} from './types';

export function authRequest() {
    return {
        type: AUTH_REQUEST
    }
}

export function authSuccess() {
    return {
        type: AUTH_SUCCESS
    }
}

export function authFailure() {
    return {
        type: AUTH_FAILURE,
    }
}

export function signInRequest(email, password) {
    return {
        type: SIGNIN_REQUEST,
        payload: { email, password }
    }
}

export function signInSuccess(auth, user) {
    return {
        type: SIGNIN_SUCCESS,
        payload: { auth, user }
    }
}

export function signInFailure() {
    return {
        type: SIGNIN_FAILURE    
    }
}

export function signUpRequest(name, email, password) {
    return {
        type: SIGNUP_REQUEST,
        payload: { name, email, password }
    }
}

export function signUpSuccess() {
    return {
        type: SIGNUP_SUCCESS
    }
}

export function signUpFailure() {
    return {
        type: SIGNUP_FAILURE
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}