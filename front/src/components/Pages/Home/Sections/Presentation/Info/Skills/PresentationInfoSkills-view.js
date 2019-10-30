import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import PresentationInfoSkillsSkillbar from './Skillbar';
import WithTrans from '../../../../../../Shared/WithTrans';

const PresentationInfoSkillsView = () => (
  <>
    <Grid item className="pb-3">
      <Typography variant="h6" className="text-center capitalize">
        <WithTrans i18nKey="glossary:skills">Skills</WithTrans>
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
