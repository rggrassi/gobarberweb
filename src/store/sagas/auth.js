import { put, call } from 'redux-saga/effects';
import api from '../../services/api';
import { signInSuccess, signInFailure, signUpSuccess, signUpFailure, authFailure } from '../actions/auth';
import history from '../../services/history';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

export function* auth({ payload }) {

    console.log("auth saga*")

    if (!payload) {
        return;
    }

    const { token } = payload.auth   

    try {        
        jwtDecode(token);   
        //if (auth.token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        //}
    } catch (error) {        
        yield put(authFailure());
    }
}

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'session', { email, password });
        const { token, user } = response.data;
        const auth = { token };

        if (!user.provider) {
            toast.warn('Usuário não é prestador.')
            return;
        }       

        yield put(signInSuccess(auth, user));
    
        history.push('/dashboard');        
    } catch (err) {
        toast('Usuário ou senha inválidos');
        yield put(signInFailure());
    }
}

export function* signUp({ payload }) {
    const { name, email, password } = payload;
    try {
        yield call(api.post, 'users', { 
            name,
            email,
            password,
            provider: true
        });
        yield put(signUpSuccess());

        history.push('/');
    } catch (err) {
        toast('Falha no cadastro, verifique seus dados!');
        yield put(signUpFailure());
    }
}