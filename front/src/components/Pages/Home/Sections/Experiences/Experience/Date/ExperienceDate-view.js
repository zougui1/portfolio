import React from 'react';

const ExperienceDateView = ({ experience, language }) => (
  <div className="mt-3">
    {experience[language].date}
  </div>
);

export default ExperienceDateView;
