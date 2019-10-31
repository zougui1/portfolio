import React from 'react';
import { withTranslation } from 'react-i18next';

import './Flag.scss';
import { Tooltip } from '@material-ui/core';
import { flagTooltipTrans, flagAltTrans } from './translations';

const NavbarFlagView = ({ t, onClick, flag }) => (
  <Tooltip title={flagTooltipTrans(t, flag.name)}>
    <img
      src={flag.src}
      alt={flagAltTrans(t, flag.name)}
      onClick={onClick}
      className="flag cursor-pointer"
    />
  </Tooltip>
);

export default withTranslation()(NavbarFlagView);
