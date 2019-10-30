import React from 'react';
import { Grid, Hidden } from '@material-ui/core';

import PresentationInfoProfile from './Profile';
import PresentationInfoSkills from './Skills';

const PresentationInfoView = () => (
  <Grid container className="mt-12" wrap="wrap" justify="center">
    <Grid container item xs={12} sm={10} md={6} className="shadow-md border border-white p-4" direction="column">
      <PresentationInfoProfile />
    </Grid>

    <Hidden mdUp>
      <Grid container className="py-4"></Grid>
    </Hidden>

    <Grid container item xs={12} sm={10} md={6} className="shadow-md border border-white lg:border-l-0 p-4" direction="column">
      <PresentationInfoSkills />
    </Grid>
  </Grid>
);

export default PresentationInfoView;
