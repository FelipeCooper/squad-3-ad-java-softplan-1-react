import React from 'react';
import Login from '../pages/Login'
import Home from '../pages/Home'
import ErrorDetail from '../pages/ErrorDetail'
import history from './History'
import {Router,Route} from 'react-router';
import  { Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const Routes =  () =>(
    <Router history={history}>
        <Switch>
            <Route exact path="/login"  component={Login} />
            <PrivateRoutes path="/error/:id"  component={ErrorDetail} />
            <PrivateRoutes exact path="/" component={Home}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </Router>


)

export default Routes;