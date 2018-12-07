import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './App.scss';

import { login } from '../shared/redux/actions/index';

import LandingPage from '../shared/landing/LandingPage/LandingPage';
import Login from '../shared/auth/Login/Login';
import Logout from '../shared/auth/Logout/Logout';
import ProtectedRoute from '../shared/utils/ProtectedRoute/ProtectedRoute';
import OnboardingScreen from '../shared/auth/Onboarding/OnboaringMain/OnboardingScreen/OnboardingScreen';
import ModelScreen from '../model/Screen/Screen';
import ClientScreen from '../client/Screen/Screen';




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
          <ProtectedRoute
            path='/onboard'
            component={OnboardingScreen} />
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
