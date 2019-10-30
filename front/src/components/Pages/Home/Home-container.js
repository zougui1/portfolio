import React from 'react';
import { connect } from 'dynamic-redux';

import HomeView from './Home-view';

const mapStateToProps = 'client: language';

class Home extends React.PureComponent {

  render() {
    return <HomeView />;
  }
}

export default connect(mapStateToProps)(Home);
