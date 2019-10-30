import React from 'react';

const ExperienceDescriptionView = ({ experience, language }) => (
  <p className="tracking-wide mt-2">
    {experience[language].description}
  </p>
);

export default ExperienceDescriptionView;
