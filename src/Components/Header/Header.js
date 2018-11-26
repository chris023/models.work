import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div className='Header'>
        <NavLink exact to='/' className='nav logo' activeClassName='selected'> LOGO GOES HERE </NavLink>
        <NavLink to='/eventForm'> REMEMBER TO DELETE THIS JACK</NavLink>
        <NavLink to='/onboard'> onboarding</NavLink>
        {
          this.props.authenticated
            ? <NavLink to='/logout' className='nav signout' activeClassName='selected'>Sign Out</NavLink>
            : <NavLink to='/login' className='nav login' activeClassName='selected'>Login/Signup</NavLink>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Header);
