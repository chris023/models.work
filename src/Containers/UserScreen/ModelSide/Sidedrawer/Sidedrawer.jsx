import React, { Component } from 'react';
import './Sidedrawer.scss';

import { NavLink } from 'react-router-dom';

export default class Sidedrawer extends Component {

  render() {
    return (
      <div className="Sidedrawer">
        <div class="top_container">
          <div className="flex-center profile">
            <p className="profile__image">Img</p>
            <div className="name">
              <p className="name__firstname">Antoinette</p>
              <p className="name__lastname">Rodriguez</p>
            </div>
          </div>
          <NavLink to='/user/editprofile' onClick={this.props.toggleSideNav} className='navlink navlink--first'>Edit Profile</NavLink>
          <NavLink to='/user/dashboard' onClick={this.props.toggleSideNav} className='navlink navlink--first'>Dashboard</NavLink>
          <NavLink to='/user/events' onClick={this.props.toggleSideNav} className='navlink'>Events</NavLink>
          <NavLink to='/user/reports' onClick={this.props.toggleSideNav} className='navlink'>Reports</NavLink>
          <NavLink to='/user/wallet' onClick={this.props.toggleSideNav} className='navlink navlink__last'>Wallet</NavLink>
        </div>
        <NavLink to='/logout' onClick={this.props.toggleSideNav} className='navlink navlink__logout'>Logout</NavLink>
      </div>
    )
  }
}