import React, { Component } from 'react';
import './MobileFooter.scss';
import { NavLink } from 'react-router-dom';

class MobileFooter extends Component {

  render() {
    return (
      <div className="MobileFooter">
        <NavLink to="/user/events"><p>Events</p></NavLink>
        <NavLink exact to="/user/"><p>Dashboard</p></NavLink>
        <NavLink to="/user/reports"><p>Reports</p></NavLink>
      </div>
    )
  }
}

export default MobileFooter;