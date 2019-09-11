import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });
    const { token, user } = response.data;
}