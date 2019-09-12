import { put, call } from 'redux-saga/effects';
import api from '../../services/api';
import { signInSuccess } from '../actions/auth';
import history from '../../services/history';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });
    const { token, user } = response.data;

    if (!user.provider) {
        console.error('Usuário não é prestador.')
        return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard')
}