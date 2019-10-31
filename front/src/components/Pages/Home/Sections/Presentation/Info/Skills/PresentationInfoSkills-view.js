import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import PresentationInfoSkillsSkillbar from './Skillbar';
import { infoSkillTitle } from './translations';

const PresentationInfoSkillsView = () => (
  <>
    <Grid item className="pb-3">
      <Typography variant="h6" className="text-center capitalize">
        {infoSkillTitle()}
      </Typography>
    </Grid>

    <Grid container item className="text-center" direction="column">
      <PresentationInfoSkillsSkillbar skill="advanced" label="HTML/CSS" />
      <PresentationInfoSkillsSkillbar skill="advanced" label="JavaScript/Node.js" />
      <PresentationInfoSkillsSkillbar skill="advanced" label="React" />
    </Grid>
  </>
);

export default PresentationInfoSkillsView;
