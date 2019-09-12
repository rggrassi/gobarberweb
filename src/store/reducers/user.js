import { SIGNIN_SUCCESS } from '../actions/types'

const INITIAL_STATE = { 
    profile: null, 
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS: {
            return { ...state, profile: action.payload.user }
        }
        default: 
            return state;
    }
}