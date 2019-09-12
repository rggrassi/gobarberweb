import { put, call } from 'redux-saga/effects';
import api from '../../services/api';
import { signInSuccess, signInFailure } from '../actions/auth';
import history from '../../services/history';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'session', { email, password });
        const { token, user } = response.data;
    
        if (!user.provider) {
            toast.warn('Usuário não é prestador.')
            return;
        }
    
        yield put(signInSuccess(token, user));
    
        history.push('/dashboard');        
    } catch (err) {
        toast('Usuário ou senha inválidos')
        yield put(signInFailure());
    }
}