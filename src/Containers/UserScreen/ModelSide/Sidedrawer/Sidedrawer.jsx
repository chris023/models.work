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
      <div className="Sidedrawer" onBlur={() => this.closeSidedrawer()}>
        <div class="top_container">
          <div className="flex-center profile">
            <p className="profile__image">Img</p>
            <div class="container">
              <p className="container__firstname">Antoinette</p>
              <p className="container__lastname">Rodriguez</p>
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

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: status => dispatch(sidedrawer(status))
})

export default connect(null, mapDispatchToProps)(Sidedrawer);