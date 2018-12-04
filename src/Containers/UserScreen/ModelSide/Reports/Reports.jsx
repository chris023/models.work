import React, { Component } from 'react';
import './Reports.scss';

class Reports extends Component {

  render() {
    return (
      <div className="Reports">
        <div className="header">
          <div className="header_top">
            <p className="">Miami Beach</p>
            <p className="header_top__right">December 20, 2029</p>
            <p className="">Brand Ambassador</p>
            <p className="header_top__right">2:00pm - 8:00pm</p>
          </div>
          <div className="seperator"></div>
          <div className="header_bottom">
            <p className="">$14.00 Pending!</p>
            <button className="header_bottom__button">Submit</button>
          </div>
        </div>
        <div className="Report">

        </div>
      </div>
    )
  }
}

export default Reports;