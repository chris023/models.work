import React, { Component } from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <div className="user-screen-model-screen-footer">
        <NavLink to="/user/events"><p>Events</p></NavLink>
        <NavLink exact to="/user/"><p>Dashboard</p></NavLink>
        <NavLink to="/user/reports"><p>Reports</p></NavLink>
      </div>
    )
  }
}

export default Footer;