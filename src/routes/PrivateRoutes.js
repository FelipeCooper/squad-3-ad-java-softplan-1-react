import React from 'react';
import { isAuthenticated } from "../service/Auth"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => 
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
    }
    />

)

export default PrivateRoutes;