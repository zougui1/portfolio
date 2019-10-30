import React from 'react';

import { competencesData } from './data';
import CompetencesSectionView from './CompetencesSection-view';

const CompetencesSectionContainer = () => (
  <CompetencesSectionView competencesData={competencesData} />
);

export default CompetencesSectionContainer;
