import React, { Component } from 'react';
import './Sidedrawer.scss';
import { connect } from 'react-redux';
import { sidedrawer } from '../../../../Redux/Actions';

import { NavLink } from 'react-router-dom';

class Sidedrawer extends Component {
  constructor() {
    super();

  }

  closeSidedrawer = () => {
    this.props.toggleSidedrawer(false)
  }

  render() {
    return (
      <div className="sidedrawer" onBlur={() => this.closeSidedrawer()}>
        <div className="sidedrawer-header-profile">
          <p className="header-image-profile">Image Here</p>
          <p className="header-text-name">Chris Meyey</p>
        </div>
        <NavLink to='/user/dashboard' onClick={() => this.closeSidedrawer()}>Dashboard</NavLink>
        {/* <NavLink>Wallet</NavLink>
        <NavLink>Events</NavLink>
        <NavLink>Tasks</NavLink>
        <NavLink>Profile</NavLink>
        <NavLink>Notifications</NavLink>
        <NavLink>Sign Out</NavLink> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: status => dispatch(sidedrawer(status))
})

export default connect(null, mapDispatchToProps)(Sidedrawer);