import React from 'react';
import { Typography } from '@material-ui/core';

const ExperienceNameView = ({ experience }) => (
  <Typography variant="h5">
    {experience.name}
  </Typography>
);

export default ExperienceNameView;
