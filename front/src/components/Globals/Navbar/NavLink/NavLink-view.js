import React from 'react';
import { withTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import { linkName } from './translations';

const NavLinkView = ({ name }) => (
  <Link
    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    to={'/#' + name}
    className="mr-5"
  >
    {linkName(name)}
  </Link>
);

export default withTranslation()(NavLinkView);
