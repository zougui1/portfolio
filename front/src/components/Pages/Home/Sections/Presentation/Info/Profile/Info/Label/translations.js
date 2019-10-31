import React from 'react';

import WithTrans from '../../../../../../../../Shared/WithTrans';

export const label = (i18nKey, children) => (
  <>
    <WithTrans i18nKey={i18nKey}>
      {children}
    </WithTrans>:
  </>
);
