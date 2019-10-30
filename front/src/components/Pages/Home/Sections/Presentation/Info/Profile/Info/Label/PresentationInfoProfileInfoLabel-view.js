import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

const PresentationInfoProfileInfoLabelView = ({ i18nKey, children }) => (
  <span className="font-semibold capitalize">
    <Trans i18nKey={i18nKey}>{children}</Trans>:
  </span>
);

export default withTranslation()(PresentationInfoProfileInfoLabelView);
