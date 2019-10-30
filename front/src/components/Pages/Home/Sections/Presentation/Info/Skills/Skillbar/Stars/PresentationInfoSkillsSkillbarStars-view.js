import React from 'react';

import PresentationInfoSkillsSkillbarStarsStarView from './Star';

const PresentationInfoSkillsSkillbarStarsView = ({ getSingleValue }) => (
  <span className="text-center">
    <PresentationInfoSkillsSkillbarStarsStarView value={getSingleValue()} />
    <PresentationInfoSkillsSkillbarStarsStarView value={getSingleValue()} />
    <PresentationInfoSkillsSkillbarStarsStarView value={getSingleValue()} />
    <PresentationInfoSkillsSkillbarStarsStarView value={getSingleValue()} />
    <PresentationInfoSkillsSkillbarStarsStarView value={getSingleValue()} />
  </span>
);

export default PresentationInfoSkillsSkillbarStarsView;
