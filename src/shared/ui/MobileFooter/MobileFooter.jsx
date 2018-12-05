import React, { Component } from 'react';
import './MobileFooter.scss';
import { NavLink } from 'react-router-dom';

class MobileFooter extends Component {
  constructor() {
    super();

    this.state = {
      toggleSubMenu: false
    }
  }

  handleCLick = toggleSubMenu => {
    this.setState({
      toggleSubMenu
    })
  }

  renderEventSubMenu = () => {
    if (this.state.toggleSubMenu) {
      return (
        <div className="sub_menu">
          <NavLink className="flex-center nav_element" to="/user/events">Events</NavLink>
          <NavLink className="flex-center nav_element" to="/user/events">Events</NavLink>
          <NavLink className="flex-center nav_element" to="/user/events">Events</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="MobileFooter">
        <div onBlur={() => this.handleCLick(false)}>
          {this.renderEventSubMenu()}
          <button className="flex-center-col nav_element" onClick={() => this.handleCLick(!this.state.toggleSubMenu)}>Events</button>
        </div>
        <NavLink className="flex-center-col nav_element dashboard" to="/user/dashboard">Dashboard</NavLink>
        <NavLink className="flex-center-col nav_element reports" to="/user/wallet">Wallet</NavLink>
      </div>
    )
  }
}

export default MobileFooter;