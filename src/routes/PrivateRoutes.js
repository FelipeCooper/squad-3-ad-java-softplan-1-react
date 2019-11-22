import React from 'react';
import { isAuthenticated } from "../service/Auth";
import {  Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
export default class PrivateRoute extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            loading: true,
            isAuthenticated: false
          }
        }
        componentDidMount() {
          Promise.resolve(isAuthenticated()).then((isAuthenticated) => {
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
                      <Loading loading={true}></Loading>
                      ) : (
                        <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
                      )
                  )
              }
            />
          )
        }
      }