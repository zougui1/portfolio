import React from 'react';

import NavbarMenuView from './NavbarMenu-view';
import { anchorEl } from './actions';

class NavbarMenuContainer extends React.PureComponent {

  state = {
    anchorEl: null
  };

  render() {
    const { children } = this.props;

    const anchor = anchorEl(this);

    return (
      <NavbarMenuView anchor={anchor}>
        {children}
      </NavbarMenuView>
    );
  }
}

export default NavbarMenuContainer;
