import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function SignUp(props) {

    /*if (signed) {
        const { from } = props.location.state || { from: { pathname: '/dashboard' } };        
        return <Redirect to={from} />
    }*/
    const handleSubmit = () => {

    }

    return ( 
        <Fragment>
            <img src={logo} alt="Gobarber"/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome completo" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha secreta"/>
                <button type="submit">Criar conta</button>
                <Link to='/'>Já tenho login</Link>
            </form>
        </Fragment>
    )
}