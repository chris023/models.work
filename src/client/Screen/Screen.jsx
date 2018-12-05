import React, { Component } from 'react';
import './Screen.scss';
import { Route } from 'react-router-dom';

import MobileFooter from '../../shared/ui/MobileFooter/MobileFooter';
import CreateEvent from '../CreateEvent/CreateEvent';

export default class Screen extends Component {

  render() {
    return (
      <div className="user-client-screen">
        <Route
          path='/user/client/events/create'
          component={CreateEvent} />
        <Route
          path='/user/'
          component={MobileFooter} />
      </div>
    )
  }
}