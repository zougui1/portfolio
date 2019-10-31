import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import Competence from './Competence/Competence-view';
import { sectionTitle, sectionSubtitle } from './translations';

const CompetencesSectionView = ({ competencesData }) => (
  <Section
    id="competences"
    title={sectionTitle()}
    subtitle={sectionSubtitle()}
  >
    <Grid container justify="center" spacing={4}>
      {competencesData.map(competence => (
        <Competence key={competence.name} competence={competence} />
      ))}
    </Grid>
  </Section>
);

export default CompetencesSectionView;
