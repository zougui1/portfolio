import React from 'react';
import { connect } from 'dynamic-redux';

import ExperienceView from './Experience-view';

const mapStateToProps = 'client: language';

const ExperienceContainer = ({ experience, language }) => (
  <ExperienceView experience={experience} language={language} />
);

export default connect(mapStateToProps)(ExperienceContainer);
