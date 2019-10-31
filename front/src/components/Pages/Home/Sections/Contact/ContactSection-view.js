import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import ContactForm from './Form';
import { sectionTitle, sectionSubtitle } from './translations';

const ContactSectionView = () => (
  <Section
    id="contact"
    title={sectionTitle()}
    subtitle={sectionSubtitle()}
  >
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={9} xl={8} className="bg-gray-900 p-4 rounded-lg">
        <ContactForm />
      </Grid>
    </Grid>
  </Section>
);

export default ContactSectionView;
