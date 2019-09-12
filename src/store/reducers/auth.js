import { SIGNIN_SUCCESS } from '../actions/types'

const INITIAL_STATE = { 
    token: null, 
    signed: false, 
    loading: false
}

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS: {
            return { ...state, token: action.payload.token, signed: true }
        }
        default: 
            return state;
    }
}