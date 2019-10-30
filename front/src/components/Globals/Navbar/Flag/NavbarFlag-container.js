import React from 'react';
import { connect } from 'dynamic-redux';

import NavbarFlagView from './NavbarFlag-view';
import { flagsData } from './data';
import { setLanguage } from './actions';

const mapStateToProps = 'client: language';
const mapDispatchToProps = 'client: setLanguage';

class NavbarFlagContainer extends React.PureComponent {

  render() {
    const { language } = this.props;

    return <NavbarFlagView
      onClick={e => setLanguage(this)(e)}
      flag={flagsData[language].target()}
    />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarFlagContainer);
