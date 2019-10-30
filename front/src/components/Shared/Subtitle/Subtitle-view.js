import React from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';

import './Subtitle.scss';

const SubtitleView = ({ children, className }) => (
  <Typography variant="subtitle1" className={classNames('subtitle', className)}>
    {children}
  </Typography>
);

export default SubtitleView;
