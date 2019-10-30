import React from 'react';

import './Home.scss';
import PresentationSection from './Sections/Presentation';
import ExperiencesSection from './Sections/Experiences';
import CompetencesSection from './Sections/Competences';

const HomeView = () => (
  <>
    <PresentationSection />
    <ExperiencesSection />
    <CompetencesSection />
  </>
);

export default HomeView;
