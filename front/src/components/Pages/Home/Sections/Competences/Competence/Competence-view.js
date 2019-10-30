import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './Competence.scss';

const CompetenceView = ({ competence }) => (
  <Grid item>
    <img
      src={competence.logo}
      className={'logo mb-3 ' + competence.name}
      alt="logo of the technology"
    />
    <Typography variant="h6" className="text-center">{competence.name}</Typography>
  </Grid>
);

export default CompetenceView;
