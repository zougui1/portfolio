import React from 'react';
import { withTranslation } from 'react-i18next';

import { imgAlt } from './translations';

const ExperienceMediaView = ({ experience, language, t }) => (
  <img
    src={experience[language].thumbnail}
    alt={imgAlt(t)}
  />
);

export default withTranslation()(ExperienceMediaView);
