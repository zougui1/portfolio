import React from 'react';
import { Grid } from '@material-ui/core';

import './PresentationSection.scss';
import Section from '../../../../Shared/Section';
import WithTrans from '../../../../Shared/WithTrans';
import Photo from './Photo';
import PresentationIntro from './Intro';
import PresentationInfo from './Info';

const PresentationSectionView = () => (
  <Section
    id="presentation"
    title={<WithTrans i18nKey="glossary:presentation">Presentation</WithTrans>}
    subtitle={<WithTrans i18nKey="home:presentation.subtitle">Web developer | React, NodeJs</WithTrans>}
  >
    <Grid container justify="space-between" alignItems="center">
      <Grid container item xs={12} md={5} justify="center">
        <Photo />
      </Grid>

      <Grid container item xs={12} md={7} justify="center">
        <PresentationIntro />
      </Grid>

      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <PresentationInfo />
        </Grid>
      </Grid>
    </Grid>
  </Section>
);

export default PresentationSectionView;
