import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import PresentationInfoProfileInfoView from './Info/PresentationInfoProfileInfo-view';
import { PresentationInfoProfileViewData } from './PresentationInfoProfileView-data';
import { infoProfileTitle } from './translations';

const PresentationInfoProfileView = () => (
  <>
    <Grid item className="pb-3">
      <Typography variant="h6" className="text-center capitalize">
        {infoProfileTitle()}
      </Typography>
    </Grid>

    {PresentationInfoProfileViewData.map(data => (
      <PresentationInfoProfileInfoView
        key={data.i18nKey}
        i18nKey={data.i18nKey}
        defaultLabel={data.defaultLabel}
        content={data.Content}
      />
    ))}
  </>
);

export default PresentationInfoProfileView;
