import React from 'react';
import { Grid } from '@material-ui/core';

import PresentationInfoProfileInfoLabelView from './Label/PresentationInfoProfileInfoLabel-view';

const PresentationInfoProfileInfoView = ({ i18nKey, defaultLabel, content }) => (
  <Grid container item justify="space-between" className="py-2">
    <Grid item>
      <PresentationInfoProfileInfoLabelView i18nKey={i18nKey}>
        {defaultLabel}
      </PresentationInfoProfileInfoLabelView>
    </Grid>

    <Grid item className="text-right">
      {content}
    </Grid>
  </Grid>
);

export default PresentationInfoProfileInfoView;
