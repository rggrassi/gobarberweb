import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import AvatarInput from '../Profile/AvatarInput';
import { updateProfileRequest } from '../../store/actions/user';
import { signOut } from '../../store/actions/auth';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));        
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} initialData={profile}>
                <AvatarInput name='avatar_id'/>
                <Input name='name' placeholder='Nome completo'/>
                <Input name='email' placeholder='Seu e-mail' autoComplete='off'/>
                <hr/>
                <Input name='oldPassword' type='password' placeholder='Sua senha atual' autoComplete='off'/>
                <Input name='password' placeholder='Nova senha'/>
                <Input name='confirmPassword' placeholder='Confirmação de senha'/>
                <button onClick={handleSubmit} type='submit'>Atualizar perfil</button>
            </Form>    
            <button type='button' onClick={handleSignOut}>Sair do GoBarber</button>
        </Container>
    )
}