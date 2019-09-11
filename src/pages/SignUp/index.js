import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import schema from './validation/schema';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp(props) {

    /*if (signed) {
        const { from } = props.location.state || { from: { pathname: '/dashboard' } };        
        return <Redirect to={from} />
    }*/
    function handleSubmit(data) {
        console.tron.log(data)
    }

    return ( 
        <Fragment>
            <img src={logo} alt="Gobarber"/>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                <Input name="name" type="text" placeholder="Nome completo" autoComplete="off" autoFocus />
                <Input name="email" type="email" placeholder="Seu e-mail" autoComplete="off"/>
                <Input name="password" type="password" placeholder="Sua senha secreta" autoComplete="off"/>
                <button type="submit">Criar conta</button>
                <Link to='/'>Já tenho login</Link>
            </Form>
        </Fragment>
    )
}