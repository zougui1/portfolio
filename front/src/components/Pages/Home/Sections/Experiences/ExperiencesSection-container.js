import React from 'react';

import ExperiencesView from './ExperiencesSection-view';
import { experiencesData } from './data';

const ExperiencesSectionContainer = () => (
  <ExperiencesView experiencesData={experiencesData} />
);

export default ExperiencesSectionContainer;
