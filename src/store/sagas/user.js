import { put, call } from 'redux-saga/effects';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { updateProfileSuccess, updateProfileFailure } from '../actions/user';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;
  
  const profile = Object.assign({ name, email }, rest.oldPassword ? rest: {});
  try {
    const response = yield call(api.put, '/users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch(err) {
    console.log(err);
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}