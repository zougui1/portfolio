import React from 'react';
import classNames from 'classnames';

import './LoaderErrorMessage.scss';

const LoaderErrorMessageView = ({ message, className }) => (
  <p className={classNames('error', className)}>
    {message}
  </p>
);

export default LoaderErrorMessageView;
