import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div className="user-screen-model-screen-header">
        <NavLink to="/user/events"><p>BurgerBoi</p></NavLink>
        <p>Dashboard</p>
        <NavLink to="/user/wallet"><p>Wallet</p></NavLink>
      </div>
    )
  }
}

export default Header;