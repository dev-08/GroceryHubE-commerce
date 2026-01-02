import React from 'react';
import './TrendingPage.css';

const TrendingPage = () => {
  return (
    <div className="trending-page">
      <div className="column col-md-4">
        <h2>Best Products</h2>
        <ul>
          <li>Smart Doorlock     1   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1</li>
          <li>Smart Doorbell     3    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1</li>
          <li>Smart thermostats  5   &nbsp;&nbsp;&nbsp;&nbsp;  3</li>
          <li>Smart thermostats  4   &nbsp;&nbsp;&nbsp;&nbsp;  6</li>
          <li>Smart lightings    1   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  4</li>
        </ul>
      </div>

      <div className="column col-md-4">
        <h2>Most Sold Products by Zip Code</h2>
        <ul>
          <li>Zip Code 60616: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Doorlock  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50 </li>
          <li>Zip Code 60612: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Doorbell  3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  30 </li>
          <li>Zip Code 60611: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Thermostats  4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  120 </li>
          <li>Zip Code 60614: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Thermostats  5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  100 </li>
          <li>Zip Code 60634: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart lightings  4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1200 </li>
        </ul>
      </div>

    </div>
  );
};

export default TrendingPage;