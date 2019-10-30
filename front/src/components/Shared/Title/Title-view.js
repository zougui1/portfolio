import React from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';

import './Title.scss';

const TitleView = ({ children, className }) => (
  <Typography variant="h4" className={classNames('title', className)}>
    {children}
  </Typography>
);

export default TitleView;
