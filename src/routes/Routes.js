import React from 'react';
import Login from '../pages/Login'
import Panel from '../pages/Home'
import ErrorPanel from '../pages/ErrorPanel'
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const Routes =  () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login"  component={Login} />
            <Route path="/error/:id"  component={ErrorPanel} />
            <PrivateRoutes exact path="/" component={Panel}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </BrowserRouter>


)

export default Routes;