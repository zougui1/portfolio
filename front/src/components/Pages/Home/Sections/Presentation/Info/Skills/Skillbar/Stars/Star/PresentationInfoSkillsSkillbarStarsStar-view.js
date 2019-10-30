import React from 'react';
import classNames from 'classnames';

import { getStarClass } from './actions';

const PresentationInfoSkillsSkillbarStarsStarView = ({ value }) => (
  <i className={classNames(getStarClass(value), 'text-yellow-400 fa-lg mx-1')}></i>
);

export default PresentationInfoSkillsSkillbarStarsStarView;
