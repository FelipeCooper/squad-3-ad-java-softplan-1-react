import React from 'react';
import { isAuthenticated } from "../service/Auth"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/*const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ (props) => 
         isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
    }
    />

)

export default PrivateRoutes;*/
export default class PrivateRoute extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            loading: true,
            isAuthenticated: false
          }
        }
      
        componentDidMount() {

          isAuthenticated().then((isAuthenticated) => {
            this.setState({
              loading: false,
              isAuthenticated
            })
          })
        }
      
        render() {
          const { component: Component, ...rest } = this.props
          return (
            <Route
              {...rest}
              render={props =>
                this.state.isAuthenticated ? (
                  <Component {...props} />
                ) : (
                    this.state.loading ? (
                      <div>LOADING</div>
                    ) : (
                        <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
                      )
                  )
              }
            />
          )
        }
      }