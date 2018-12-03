import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './Header.scss';
import { connect } from 'react-redux';
import PersonalBio from '../../Containers/Onboarding/ModelSide/PersonalBio/PersonalBio';

class Header extends Component {

  render() {
    const landingHeader = () => (
      <div className="landing_header">
        { this.props.authenticated
            ? <NavLink to='/logout' className='flex-center landing__button landing__signout'>Sign Out</NavLink>
            : <NavLink to='/login' className='flex-center landing__button landing__login'>Login</NavLink>
        }
      </div>
    )

    const appHeader = () => (
      <div className="app_header">
        <p className="app_header__nav">Ham</p>
        <p className="app_header__title">Models.work</p>
      </div>
    )

    return (
      <div className="Header">
      <Route
        exact path='/'
          component={landingHeader} />
      <Route
        path='/user'
        component={appHeader} />
      </div>
      
      // <div className='Header'>
      //   <NavLink to='/onboard'> onboarding</NavLink>
      //   {
      //     this.props.authenticated
      //       ? <NavLink to='/logout' className='nav signout' activeClassName='selected'>Sign Out</NavLink>
      //       : <NavLink to='/login' className='nav login' activeClassName='selected'>Login/Signup</NavLink>
      //   }
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Header);
