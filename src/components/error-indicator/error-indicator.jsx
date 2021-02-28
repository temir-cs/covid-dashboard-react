import React from 'react';
import img from '../app/assets/sad.svg';
import './error-indicator.scss';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img className="error-indicator-img" src={img} alt="sad-smiley" />
  </div>
);

export default ErrorIndicator;
