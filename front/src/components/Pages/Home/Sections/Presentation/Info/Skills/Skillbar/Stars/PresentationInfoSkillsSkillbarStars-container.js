import React from 'react';

import PresentationInfoSkillsSkillbarStarsView from './PresentationInfoSkillsSkillbarStars-view';
import { skillToNumber } from './actions';

class PresentationInfoSkillsSkillbarStarsContainer extends React.PureComponent {

  value = skillToNumber(this.props.skill);

  getSingleValue = () => {
    if (this.value <= 0) {
      return 0;
    }

    if (this.value < 1) {
      this.value = 0;
      return 0.5;
    }

    this.value--;
    return 1;
  }

  render() {
    const { skill } = this.props;

    return <PresentationInfoSkillsSkillbarStarsView
      skill={skill}
      getSingleValue={this.getSingleValue}
    />
  }
}

export default PresentationInfoSkillsSkillbarStarsContainer;
