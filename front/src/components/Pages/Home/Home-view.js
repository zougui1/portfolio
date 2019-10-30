import React from 'react';

import './Home.scss';
import PresentationSection from './Sections/Presentation';
import ExperiencesSection from './Sections/Experiences';
import CompetencesSection from './Sections/Competences';
import ContactSection from './Sections/Contact';

const HomeView = () => (
  <>
    <PresentationSection />
    <ExperiencesSection />
    <CompetencesSection />
    <ContactSection />
  </>
);

export default HomeView;
