import React from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Title';
import Subtitle from '../Subtitle';

const SectionView = ({ children, id, title, subtitle }) => (
  <section id={id} className="pb-5 pt-16">
    <Grid container justify="center">
      <Grid container item xs={12} sm={11} md={10} lg={9} direction="column" alignItems="center" className="p-2">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <div className="mt-4">
          {children}
        </div>
      </Grid>
    </Grid>
  </section>
);

export default SectionView;
