import React from 'react';
import { Grid } from '@material-ui/core';

import './PresentationSection.scss';
import Section from '../../../../Shared/Section';
import Photo from './Photo';
import PresentationIntro from './Intro';
import PresentationInfo from './Info';
import { sectionTitle, sectionSubtitle } from './translations';

const PresentationSectionView = () => (
  <Section
    id="presentation"
    title={sectionTitle()}
    subtitle={sectionSubtitle()}
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
