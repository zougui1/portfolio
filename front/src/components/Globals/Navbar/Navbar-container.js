import React from 'react';
import { throttle } from 'lodash';

import NavbarView from './Navbar-view';
import { onScroll } from './action';

class NavbarContainer extends React.PureComponent {

  state = {
    className: ''
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(onScroll(this), 200));
  }

  render() {
    const { className } = this.state;

    return <NavbarView className={className} />;
  }
}

export default NavbarContainer;
