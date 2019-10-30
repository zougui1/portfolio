import React from 'react';
import { connect } from 'dynamic-redux';

import HomeView from './Home-view';

const mapStateToProps = 'client: language';

const HomeContainer = () => (
  <HomeView />
);

export default connect(mapStateToProps)(HomeContainer);
