import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import Experience from './Experience';
import { sectionTitle, sectionSubtitle } from './translations';

const ExperiencesSectionView = ({ experiencesData }) => (
  <Section
    id="experiences"
    title={sectionTitle()}
    subtitle={sectionSubtitle()}
  >
    <Grid container justify="center" spacing={4}>
      {experiencesData.map(experience => (
        <Experience key={experience.name} experience={experience} />
      ))}
    </Grid>
  </Section>
);

export default ExperiencesSectionView;
