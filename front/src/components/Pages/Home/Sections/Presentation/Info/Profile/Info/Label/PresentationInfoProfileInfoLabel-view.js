import React from 'react';

import { label } from './translations';

const PresentationInfoProfileInfoLabelView = ({ i18nKey, children }) => (
  <span className="font-semibold capitalize">
    {label(i18nKey, children)}
  </span>
);

export default PresentationInfoProfileInfoLabelView;
