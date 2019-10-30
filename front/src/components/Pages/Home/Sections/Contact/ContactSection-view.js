import React from 'react';
import { Grid } from '@material-ui/core';

import Section from '../../../../Shared/Section';
import WithTrans from '../../../../Shared/WithTrans';
import ContactForm from './Form';

const ContactSectionView = () => (
  <Section
    id="contact"
    title={<WithTrans i18nKey="glossary:contact">Contact</WithTrans>}
    subtitle={<WithTrans i18nKey="home:contact.subtitle">Send me a message</WithTrans>}
  >
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={9} xl={8} className="bg-gray-900 p-4 rounded-lg">
        <ContactForm />
      </Grid>
    </Grid>
  </Section>
);

export default ContactSectionView;
