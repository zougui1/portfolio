import React from 'react';
import { withTranslation } from 'react-i18next';

import './Flag.scss';
import { Tooltip } from '@material-ui/core';

const NavbarFlagView = ({ t, onClick, flag }) => (
  <Tooltip title={t('navbar:flag.tooltip', { language: t('glossary:language-code_to_fullname.' + flag.name) })}>
    <img
      src={flag.src}
      alt={t('navbar:flag.alt', { language: flag.name })}
      onClick={onClick}
      className="flag cursor-pointer"
    />
  </Tooltip>
);

export default withTranslation()(NavbarFlagView);
