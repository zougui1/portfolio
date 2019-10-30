import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

const WithTrans = ({ children, i18nKey, i18n, ...props }) => (
  <Trans i18nKey={i18nKey} i18n={i18n} {...props}>{children}</Trans>
);

export default withTranslation()(WithTrans);
