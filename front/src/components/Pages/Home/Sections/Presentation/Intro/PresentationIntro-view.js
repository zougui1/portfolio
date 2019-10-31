import React from 'react';
import { Typography } from '@material-ui/core';

import './PresentationIntro.scss';
import WithTrans from '../../../../../Shared/WithTrans';
import { introFirstParagraph, introSecondParagraph } from './translations';

const PresentationIntroView = () => (
  <>
    <Typography variant="body1" className="px-6 presentation-intro">
      {introFirstParagraph()}
    </Typography>

    <Typography variant="body1" className="px-6 presentation-intro">
      {introSecondParagraph()}
    </Typography>
  </>
);

export default PresentationIntroView;
