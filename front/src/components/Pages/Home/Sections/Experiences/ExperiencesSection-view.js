import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import WithTrans from '../../../../Shared/WithTrans';
import Experience from './Experience';

const ExperiencesSectionView = ({ experiencesData }) => (
  <Section
    id="experiences"
    title={<WithTrans i18nKey="glossary:experiences">Experiences</WithTrans>}
    subtitle={<WithTrans i18nKey="home:experiences.subtitle">My last experiences:</WithTrans>}
  >
    <Grid container justify="center" spacing={4}>
      {experiencesData.map(experience => (
        <Experience key={experience.name} experience={experience} />
      ))}
    </Grid>
  </Section>
);

export default ExperiencesSectionView;
