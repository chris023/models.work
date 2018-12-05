import React, { Component } from 'react';
import './Settings.scss';
import { NavLink } from 'react-router-dom';

export default class Settings extends Component {
  render() {
    return (
      <div className="WalletSettings">
        <div className="header">
          <h2 className="header__title">Settings</h2>
          <NavLink to="/user/wallet/" className="back_navlink">back</NavLink>
        </div>
        <div className="content">
          <p className="margin_0">Your Payment Account:</p>
          <p className="margin_0 content__account">No payment method connected</p>
          <p className="margin_0 content__connect">Connect</p>
          <button className="content__button">Paypal</button>
          <button className="content__button">ACH Bank Account</button>
        </div>
      </div>
    );
  }
}