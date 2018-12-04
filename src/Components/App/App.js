import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Login from '../../Containers/Login/Login';
import Logout from '../../Containers/Logout/Logout';
import EventForm from '../EventForm/EventForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import OnboardingScreen from '../../Containers/Onboarding/OnboaringMain/OnboardingScreen/OnboardingScreen';
import ModelScreen from '../../Containers/UserScreen/ModelSide/ModelScreen/ModelScreen';

import { login } from '../../Redux/Actions/index';

import './App.scss';
import { connect } from 'react-redux';
import ClientScreen from '../../Containers/UserScreen/ClientSide/ClientScreen/ClientScreen';

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
        <Route
          path='/'
          component={Header}
        />
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
            path='/eventForm'
            component={EventForm} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
