import React, { Component } from 'react';
import './Sidebar.scss';

import NavLink from 'react-router-dom';

class Sidebar extends Component {
  super();
  constructor() {

  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header-profile">
          <p className="header-image-profile">Image Here</p>
          <p className="header-text-name">Chris Meyey</p>
        </div>
        <NavLink>Dashboard</NavLink>
        <NavLink>Wallet</NavLink>
        <NavLink>Events</NavLink>
        <NavLink>Tasks</NavLink>
        <NavLink>Profile</NavLink>
        <NavLink>Notifications</NavLink>
        <NavLink>Sign Out</NavLink>
      </div>
    )
  }
}