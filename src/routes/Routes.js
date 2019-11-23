import React from 'react';
import Login from '../pages/Login'
import Home from '../pages/Home'
import ErrorPanel from '../pages/ErrorPanel'
import history from './History'
import {Router,Route} from 'react-router';
import  { Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const Routes =  () =>(
    <Router history={history}>
        <Switch>
            <Route exact path="/login"  component={Login} />
            <Route path="/error/:id"  component={ErrorPanel} />
            <PrivateRoutes exact path="/" component={Home}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </Router>


)

export default Routes;