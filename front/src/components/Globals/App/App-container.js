import React from 'react';
import { connect } from 'dynamic-redux';

import AppView from './App-view';

const mapDispatchToProps = 'client: setLanguage';

class AppContainer extends React.PureComponent {

  componentDidMount() {
    const { setLanguage } = this.props;
    setLanguage(window.navigator.language);
  }

  render() {
    return <AppView />;
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);
