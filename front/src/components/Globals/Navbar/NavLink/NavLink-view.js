import React from 'react';
import { upperFirst } from 'lodash';
import { Trans, withTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const NavLinkView = ({ name }) => (
  <Link
    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    to={'/#' + name}
    className="mr-5"
  >
    <Trans i18nKey={'glossary:' + name}>
      {upperFirst(name)}
    </Trans>
  </Link>
);

export default withTranslation()(NavLinkView);
