import React, { Component } from 'react';
import './Wallet.scss';
import { NavLink } from 'react-router-dom';

class Wallet extends Component {

  render() {
    return (
      <div className="Wallet">
        <div className="header">
          <h2 className="header__title">Wallet</h2>
          <NavLink to="/user/wallet/settings" className="settings_navlink">Settings</NavLink>
        </div>
        <div className="content">
          <p className="margin_0">You have</p>
          <p className="margin_0 content__balance">$104.00</p>
          <button className="content__button">Transfer To Account</button>
          <div className="content__bank_status">
            <img src="" alt="" />
            <p className="margin_0">Connected </p>
            <p className="margin_0">Chase Checking</p>
            <p className="margin_0">xxxx4756</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Wallet;