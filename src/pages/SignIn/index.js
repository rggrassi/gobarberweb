import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import schema from './validation/schema'

export default function SignIn(props) {
    const { values, errors, handleChange, handleSubmit } = useForm(login, schema);
    
    /*if (signed) {
        const { from } = props.location.state || { from: { pathname: '/dashboard' } };        
        return <Redirect to={from} />
    }*/

    function login() {
        console.log('No errors, submit callback called!');
    }
    
    return ( 
        <Fragment>
            <img src={logo} alt="Gobarber"/>
            <form onSubmit={handleSubmit} noValidate>
                <input type="email" name="email" onChange={handleChange} value={values.email || ''} placeholder="Seu e-mail" autoComplete="off" autoFocus/>
                <span>{errors.email}</span>
                <input type="password" name="password" onChange={handleChange} value={values.password || ''} placeholder="Sua senha secreta" autoComplete="off"/>
                <span>{errors.password}</span>
                <button type="submit">Acessar</button>
                <Link to='/register'>Criar conta gratuita</Link>
            </form>
        </Fragment>
    )
}