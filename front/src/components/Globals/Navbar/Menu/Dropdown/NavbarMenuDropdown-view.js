import React from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';

const NavbarMenuDropdownView = ({ anchor, items }) => (
  <>
    <Button onClick={anchor.set}>
      <div className="text-white">open menu</div>
    </Button>

    <Menu
      id="navbar-menu"
      anchorEl={anchor.get}
      open={Boolean(anchor.get)}
      onClose={anchor.delete}
      classes={{ paper: 'paper-dropdown' }}
    >
      {items.map(item => (
        <MenuItem key={item.props.name} onClick={anchor.delete}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  </>
);

export default NavbarMenuDropdownView;
