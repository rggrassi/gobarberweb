import { 
    SIGNIN_REQUEST, 
    SIGNIN_SUCCESS, 
    SIGNIN_FAILURE, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE 
} from '../actions/types';

const INITIAL_STATE = { token: null, signed: false, loading: false };

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_REQUEST: {
            return { ...state, loading: true }
        }
        case SIGNIN_SUCCESS: {
            return { ...state, token: action.payload.token, signed: true, loading: false }
        }
        case SIGNIN_FAILURE: {
            return { ...state, loading: false }
        }
        case SIGNUP_REQUEST: {
            return { ...state, loading: true }
        }
        case SIGNUP_SUCCESS: {
            return { ...state, loading: false }
        }
        case SIGNUP_FAILURE: {
            return { ...state, loading: false }
        }
        default: 
            return state;
    }
}