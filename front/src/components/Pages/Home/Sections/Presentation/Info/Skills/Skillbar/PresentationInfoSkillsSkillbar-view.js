import React from 'react';
import { Typography, Tooltip } from '@material-ui/core';

import './Skillbar.scss';
import PresentationInfoSkillsSkillbarStars from './Stars';
import WithTrans from '../../../../../../../Shared/WithTrans';

const PresentationInfoSkillsSkillbarStarsView = ({ skill, label }) => (
  <Tooltip title={<WithTrans i18nKey={'glossary:' + skill}>{skill}</WithTrans>} aria-label="skill-info">
    <div className="inline-block my-1">
      <Typography variant="subtitle1" className="inline-block label">{label}</Typography>
      <br/>
      <PresentationInfoSkillsSkillbarStars skill={skill} />
    </div>
  </Tooltip>
);

export default PresentationInfoSkillsSkillbarStarsView;
