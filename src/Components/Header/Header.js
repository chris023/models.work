import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './Header.scss';
import { connect } from 'react-redux';

import Sidedrawer from '../../Containers/UserScreen/ModelSide/Sidedrawer/Sidedrawer';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSideNav: false,
    }
  }

  toggleSideNav = () => {
    this.setState({
      showSideNav: !this.state.showSideNav,
    });
  }

  render() {

    const landingHeader = () => (
      <React.Fragment>
        <div className="landing_header">
          { this.props.authenticated
              ? <NavLink to='/logout' className='flex-center landing_header__button landing_header__signout'>Sign Out</NavLink>
              : <NavLink to='/login' className='flex-center landing_header__button landing_header__login'>Login</NavLink>
          }
        </div>
        <div className="mobile_header_filler--landing"></div>
      </React.Fragment >
    )

    const appHeader = () => (
      <React.Fragment>
        <div className="app_header">
          <p className="app_header__nav" onClick={this.toggleSideNav}>Ham</p>
          <p className="app_header__title">Models.work</p>
          {
            this.state.showSideNav &&
            <Sidedrawer toggleSideNav={this.toggleSideNav} />
          }
        </div>
        <div className="mobile_header_filler--app"></div>
      </React.Fragment>
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
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Header);
