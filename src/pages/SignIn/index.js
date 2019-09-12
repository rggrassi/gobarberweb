import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/actions/auth';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import schema from './validation/schema';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn(props) {
    
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    
    return ( 
        <Fragment>
            <img src={logo} alt="Gobarber"/>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                {/*<input type="email" name="email" onChange={handleChange} value={values.email || ''} placeholder="Seu e-mail" autoComplete="off" autoFocus/>                                
                errors.email && <span>{errors.email}</span> */}                

                {/*<input type="password" name="password" onChange={handleChange} value={values.password || ''} placeholder="Sua senha secreta" autoComplete="off"/>
                errors.password && <span>{errors.password}</span> */}
                
                <Input name="email" type="email" placeholder="Seu e-mail" autoComplete="off" autoFocus="on" autoCorrect="off"/>
                <Input name="password" type="password" placeholder="Sua senha secreta" autoComplete="off" />

                <button type="submit">Acessar</button>
                <Link to='/register'>Criar conta gratuita</Link>
            </Form>
        </Fragment>
    )
}