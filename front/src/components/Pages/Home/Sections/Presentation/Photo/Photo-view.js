import React from 'react';
import { withTranslation } from 'react-i18next';

import './Photo.scss';

const PhotoView = ({ t }) => (
  <div className="photo-wrapper">
    <img
      style={{ filter: 'brightness(0%)' }}
      className="shadow-lg photo"
      src={require('../../../../../../assets/images/presentation/profile.jpg')}
      alt={t('home:presentation.img-alt')}
    />
  </div>
);

export default withTranslation()(PhotoView);
