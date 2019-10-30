import React from 'react';

import ExperienceLabelsLabel from './Label';

const ExperienceLabelsView = ({ experience }) => (
  <div className="mt-1">
    {experience.labels.map(label => (
      <ExperienceLabelsLabel key={label} label={label} />
    ))}
  </div>
);

export default ExperienceLabelsView;
