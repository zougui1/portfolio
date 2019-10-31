import React from 'react';
import { Typography, Tooltip } from '@material-ui/core';

import './Skillbar.scss';
import PresentationInfoSkillsSkillbarStars from './Stars';
import { tooltipTitle } from './translations';

const PresentationInfoSkillsSkillbarStarsView = ({ skill, label }) => (
  <Tooltip title={tooltipTitle(skill)} aria-label="skill-info">
    <div className="inline-block my-1">
      <Typography variant="subtitle1" className="inline-block label">{label}</Typography>
      <br/>
      <PresentationInfoSkillsSkillbarStars skill={skill} />
    </div>
  </Tooltip>
);

export default PresentationInfoSkillsSkillbarStarsView;
