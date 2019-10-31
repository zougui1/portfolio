import React from 'react';
import { upperFirst } from 'lodash';

import WithTrans from '../../../Shared/WithTrans';

export const linkName = name => (
  <WithTrans i18nKey={'glossary:' + name}>
    {upperFirst(name)}
  </WithTrans>
);
