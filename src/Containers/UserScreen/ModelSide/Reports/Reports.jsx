import React, { Component } from 'react';
import './Reports.scss';

class Reports extends Component {

  render() {
    return (
      <div className="user-screen-model-reports">
        <section className="user-screen-model-reports-main-content-container">
          <div className="user-screen-model-reports-report-card">
            <div className="user-screen-model-reports-report-card-header">
              <div className="user-screen-model-reports-report-card-header-info-container">
                <p className="user-screen-model-reports-report-card-header-info-location">Miami Beach</p>
                <p className="user-screen-model-reports-report-card-header-info-type">Brand Ambassador</p>
              </div>
              <div className="user-screen-model-reports-report-card-header-date-time-container">
                <p className="user-screen-model-reports-report-card-header-date">December 20, 2029</p>
                <p className="user-screen-model-reports-report-card-header-time">2:00 - 8:00</p>
              </div>
            </div>
            <div className="user-screen-model-report-card-info-container">
              <h1 className="user-screen-model-report-card-info-payment">$14.00 Pending!</h1>
              <button className="user-screen-model-report-card-submit">Submit</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Reports;