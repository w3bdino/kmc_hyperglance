import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loadingspinner.scss';

const LoadingSpinner = (props) => {
  return (
      <div className="loadingspinner d-flex justify-content-center">
        <Spinner animation="border" className="spinner" />
      </div>
  )
};

export default LoadingSpinner;