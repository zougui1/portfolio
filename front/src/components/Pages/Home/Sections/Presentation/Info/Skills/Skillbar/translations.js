import React from 'react';

import WithTrans from '../../../../../../../Shared/WithTrans';

export const tooltipTitle = skill => (
  <WithTrans i18nKey={'glossary:' + skill}>
    {skill}
  </WithTrans>
);
