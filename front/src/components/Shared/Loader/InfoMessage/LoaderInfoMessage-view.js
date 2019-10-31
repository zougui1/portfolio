import React from 'react';
import classNames from 'classnames';

const LoaderInfoMessageView = ({ message, className }) => (
  <p className={classNames('info', className)}>
    {message}
  </p>
);

export default LoaderInfoMessageView;
