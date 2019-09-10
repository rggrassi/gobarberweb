import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../pages/layouts/default';
import AuthtLayout from '../pages/layouts/auth';

export default function RouteWrapper(props) {    
    const { component: Component, isPrivate, ...rest } = props;
    const { location } = props
    
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to={{ pathname: '/', state: { from: location } }} />
    }

    if (signed && !isPrivate) {
        return <Redirect to='/dashboard' />
    }

    const Layout = signed ? DefaultLayout : AuthtLayout

    return <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} /> 
}