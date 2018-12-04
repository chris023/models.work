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
        <div className="report">
          <div className="units_sold">
            <p className="units_sold__title">Total Units Sold</p>
            <div className="product">
              <p className="product__name">Remy Martin 1738 Accord Royal Cognac</p>
              <div className="product__input_container">
                <input className="product__input" type="text" />
                <p className="product__units">Units</p>
              </div>
            </div>
            <div className="product">
              <p className="product__name">Remy Martin VSOP</p>
              <div className="product__input_container">
                <input className="product__input" type="text" />
                <p className="product__units">Units</p>
              </div>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="question-oneline">
            <p className="question__text">On a scale of 1-5, how was the store traffic during your demo?</p>
            <input className="question__input-small" type="text"/>
          </div>
          <div className="question-oneline">
            <p className="question__text">How many customers approached?</p>
            <input className="question__input-small" type="text" />
          </div>
          <div className="question-oneline">
            <p className="question__text">How many customers sampled?</p>
            <input className="question__input-small" type="text" />
          </div>
          <div className="question">
            <p className="question__text">What was consumers feedback on the product (neat)?</p>
            <textarea className="question__textarea"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Reports;