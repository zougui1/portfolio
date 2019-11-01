import React from 'react';
import MetaTags from 'react-meta-tags';
import { withTranslation } from 'react-i18next';

import { keywords, description, locale, title } from './translations';

const MetatagsView = ({ t }) => (
  <MetaTags>
    <title>{title(t)}</title>
    {/* general meta tags */}
    <meta name="keywords" content={keywords(t)} />
    <meta name="description" content={description(t)} />
    {/* end general meta tags */}

    {/* og meta tags */}
    <meta name="og:locale" content={locale(t)} />
    <meta name="og:title" content={title(t)} />
    <meta name="og:description" content={description(t)} />
    {/* end og meta tags */}

    {/* twitter meta tags */}
    <meta name="twitter:title" content={title(t)} />
    <meta name="twitter:description" content={description(t)} />
    {/* end twitter meta tags */}
  </MetaTags>
);


export default withTranslation()(MetatagsView);
