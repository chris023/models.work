import React, { Component } from 'react';
import './Sidedrawer.scss';
import { connect } from 'react-redux';
import { sidedrawer } from '../../../../Redux/Actions';

import { NavLink } from 'react-router-dom';

class Sidedrawer extends Component {
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
        <NavLink to='/user/events' onClick={() => this.closeSidedrawer()}>Events</NavLink>
        <NavLink to='/user/reports' onClick={() => this.closeSidedrawer()}>Reports</NavLink>
        <NavLink to='/user/wallet' onClick={() => this.closeSidedrawer()}>Wallet</NavLink>
        <NavLink to='/logout' onClick={() => this.closeSidedrawer()}>Logout</NavLink>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: status => dispatch(sidedrawer(status))
})

export default connect(null, mapDispatchToProps)(Sidedrawer);