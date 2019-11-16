import React from 'react';
import Login from '../pages/Login'
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';


const Routes =  () =>(
    <BrowserRouter>
        <Switch>
            <PrivateRoutes path="/error" component={()=>(<h1>Teste de auth</h1>)}/>
            <Route exact path="/login" component={Login} ></Route>
        </Switch>
    </BrowserRouter>

)

export default Routes;