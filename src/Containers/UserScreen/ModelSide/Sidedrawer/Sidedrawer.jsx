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
            <div class="name">
              <p className="name__firstname">Antoinette</p>
              <p className="name__lastname">Rodriguez</p>
            </div>
          </div>
          <NavLink to='/user/dashboard' className='navlink navlink--first' onClick={() => this.closeSidedrawer()}>Dashboard</NavLink>
          <NavLink to='/user/events'  className='navlink' onClick={() => this.closeSidedrawer()}>Events</NavLink>
          <NavLink to='/user/reports' className='navlink' onClick={() => this.closeSidedrawer()}>Reports</NavLink>
          <NavLink to='/user/wallet' className='navlink navlink__last' onClick={() => this.closeSidedrawer()}>Wallet</NavLink>
        </div>
        <NavLink to='/logout' className='navlink navlink__logout' onClick={() => this.closeSidedrawer()}>Logout</NavLink>
      </div>
    )
  }
}