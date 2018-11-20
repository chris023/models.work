import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route {...rest} render={() => (
      authenticated
        ? (<Component />)
        : (<Redirect to='/login' />)
      )} />
  )
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
})

export default connect(mapStateToProps)(ProtectedRoute);