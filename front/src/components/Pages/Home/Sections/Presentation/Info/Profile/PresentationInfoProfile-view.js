import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';

import PresentationInfoProfileInfoView from './Info/PresentationInfoProfileInfo-view';
import { PresentationInfoProfileViewData } from './PresentationInfoProfileView-data';

const PresentationInfoProfileView = () => (
  <>
    <Grid item className="pb-3">
      <Typography variant="h6" className="text-center capitalize">
        <Trans i18nKey="glossary:profile">Profile</Trans>
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

export default withTranslation()(PresentationInfoProfileView);
