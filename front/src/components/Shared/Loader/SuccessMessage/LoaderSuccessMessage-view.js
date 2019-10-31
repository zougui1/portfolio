import React from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import './LoaderSuccessMessage.scss';

const LoaderSuccessMessageView = ({ message, canRedirect, redirection, className }) => (
  <p className={classNames('success', className)}>
    {message}
    {canRedirect && <Redirect to={redirection} />}
  </p>
);

export default LoaderSuccessMessageView;
