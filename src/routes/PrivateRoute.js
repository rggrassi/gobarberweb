import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {    
    const { component: Component, location } = props;
    
    const signed = true;

    if (!signed) {
        return <Redirect to={{ pathname: '/', state: { from: location } }} />
    }
    return <Route {...props} component={Component} /> 
}