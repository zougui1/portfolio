import React from 'react';
import { Typography } from '@material-ui/core';

import './PresentationIntro.scss';
import WithTrans from '../../../../../Shared/WithTrans';

const PresentationIntroView = () => (
  <>
    <Typography variant="body1" className="px-6 presentation-intro">
      <WithTrans i18nKey="home:presentation.intro.1">
        I am <strong>Jérémy Béhérec</strong>. I have completed an intensive training course in <strong>Web Development</strong> and I'm now in <strong>freelance</strong>. I'm looking for missions as <strong>web developer React and/or Node.js</strong>.
      </WithTrans>
    </Typography>

    <Typography variant="body1" className="px-6 presentation-intro">
      <WithTrans i18nKey="home:presentation.intro.2">
        I am passionated about new technologies and eager to learn new libraries, frameworks or even languages.
      </WithTrans>
    </Typography>
  </>
);

export default PresentationIntroView;
