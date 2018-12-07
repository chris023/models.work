import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { login } from '../shared/redux/actions/index';
import { Login, Logout } from '../shared/ui';
import { Screen as ModelScreen } from '../model';
import { Screen as ClientScreen } from '../client';
import { LandingPage } from '../shared/landing';
import { ProtectedRoute } from '../shared/utils';

import './App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      this.props.setCurrentUser(JSON.parse(cachedUser));
    } 
  }

  componentWillMount() {
    this.setState({
      loading: false,
    })
  }

  render() {

    if (this.state.loading) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <h3>Loading...</h3>
        </div>
      )
    }

    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            component={LandingPage} />
          <Route
            path='/login'
            component={Login} />
          <Route
            path='/logout'
            component={Logout} />
          <ProtectedRoute
            path='/user/client'
            component={ClientScreen} />
          <ProtectedRoute
            path='/user'
            component={ModelScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(login(user, !!user)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
