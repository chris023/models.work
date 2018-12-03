import React, { Component } from 'react';
import './MobileFooter.scss';
import { NavLink } from 'react-router-dom';

class MobileFooter extends Component {
  constructor() {
    super();

    this.state = {
      toggeled: false
    }
  }

  handleCLick = toggeled => {
    this.setState({
      toggeled
    })
  }

  renderEventType = () => {
    if (this.state.toggeled) {
      return (
        <div>
          <NavLink to="/user/events">Events</NavLink>
          <NavLink to="/user/events">Events</NavLink>
          <NavLink to="/user/events">Events</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="MobileFooter">
        <div onBlur={() => this.handleCLick(false)}>
          {this.renderEventType()}
          <button onClick={() => this.handleCLick(!this.state.toggeled)}>Events</button>
        </div>
        <NavLink to="/user/dashboard">Dashboard</NavLink>
        <NavLink to="/user/reports">Reports</NavLink>
      </div>
    )
  }
}

export default MobileFooter;