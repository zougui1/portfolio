import React from 'react';
import { Grid } from '@material-ui/core';

import ExperienceMedia from './Media';
import ExperienceName from './Name';
import ExperienceDescription from './Description/ExperienceDescription-view';
import ExperienceLabels from './Labels';
import ExperienceDate from './Date';

const ExperienceView = ({ experience, language }) => (
  <Grid item xs={12} sm={11} md={6} xl={4}>
    <Grid container justify="center">
      <Grid item className="bg-gray-900 shadow-lg">
        <ExperienceMedia experience={experience} language={language} />
        <div className="p-6">
          <ExperienceName experience={experience} />
          <ExperienceDescription experience={experience} language={language} />
          <ExperienceLabels experience={experience} />
          <ExperienceDate experience={experience} language={language} />
        </div>
      </Grid>
    </Grid>
  </Grid>
);

export default ExperienceView;
