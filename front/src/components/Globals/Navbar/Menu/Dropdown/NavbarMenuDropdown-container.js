import React from 'react';

import NavbarMenuDropdownView from './NavbarMenuDropdown-view';
import { anchorEl } from './actions';

class NavbarMenuDropdownContainer extends React.PureComponent {

  state = {
    anchorEl: null
  };

  render() {
    const { children } = this.props;

    const anchor = anchorEl(this);

    const items = Array.isArray(children)
      ? children
      : [children];

    return (
      <NavbarMenuDropdownView anchor={anchor} items={items} />
    );
  }
}

export default NavbarMenuDropdownContainer;
