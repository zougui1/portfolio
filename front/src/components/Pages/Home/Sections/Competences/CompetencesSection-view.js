import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import WithTrans from '../../../../Shared/WithTrans';
import Competence from './Competence/Competence-view';

const CompetencesSectionView = ({ competencesData }) => (
  <Section
    id="competences"
    title={<WithTrans i18nKey="glossary:competences">Competences</WithTrans>}
    subtitle={<WithTrans i18nKey="home:competences.subtitle">I master</WithTrans>}
  >
    <Grid container justify="center" spacing={4}>
      {competencesData.map(competence => (
        <Competence key={competence.name} competence={competence} />
      ))}
    </Grid>
  </Section>
);

export default CompetencesSectionView;
