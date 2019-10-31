import React from 'react';
import classNames from 'classnames';
import { CircularProgress } from '@material-ui/core';

import './LoaderSpinner.scss';

const LoaderSpinnerView = ({ color, size, thickness, message, className }) => (
  <div className={classNames('table', className)}>
    <CircularProgress
      color={color}
      size={size}
      thickness={thickness}
    />
    <span className="table-cell align-middle pl-4 loading">
      {message}
    </span>
  </div>
);

export default LoaderSpinnerView;
