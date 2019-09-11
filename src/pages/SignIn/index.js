import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
//import useForm from '../../hooks/useForm';
import schema from './validation/schema';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn(props) {
    /*const { 
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(login, schema);*/
    
    /*if (signed) {
        const { from } = props.location.state || { from: { pathname: '/dashboard' } };        
        return <Redirect to={from} />
    }*/
    function handleSubmit(data) {
        console.log(data);
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