import React from 'react';
import { withTranslation } from 'react-i18next';

const ExperienceMediaView = ({ experience, language, t }) => (
  <img
    src={experience[language].thumbnail}
    alt={t('home:experiences.data-map.img-alt')}
  />
);

export default withTranslation()(ExperienceMediaView);
