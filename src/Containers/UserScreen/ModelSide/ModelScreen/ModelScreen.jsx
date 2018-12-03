import React, { Component } from 'react';
import './ModelScreen.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Dashboard from '../Dashboard/Dashboard';
import Events from '../Events/Events';
import MobileFooter from '../MobileFooter/MobileFooter.jsx';
import Reports from '../Reports/Reports';
import Wallet from '../Wallet/Wallet';
import SideDrawer from '../Sidedrawer/Sidedrawer'

class ModelScreen extends Component {

  render() {
    return (
      <div className="user-model-screen">
        <Route
            exact path='/user/dashboard'
            component={Dashboard} />
        <Route
            path='/user/events'
            component={Events} />
        <Route
            path='/user/reports'
            component={Reports} />
        <Route
            path='/user/wallet'
            component={Wallet} />
        { 
          this.props.status && 
            <SideDrawer /> 
        }
        
        {/* <Route
            path='/user/'
            component={MobileFooter} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    status: state.sidedrawer.status
});

export default connect(mapStateToProps)(ModelScreen);