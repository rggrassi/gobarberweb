import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/register' exact component={SignUp}/>
            <PrivateRoute path='/dashboard' exact component={Dashboard}/>            
            <PrivateRoute path='/Profile' exact component={Profile}/>            
        </Switch>
    )
}