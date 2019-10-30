import React from 'react';

import NavbarMenuDropdownContainer from './Dropdown';

const NavbarMenuView = ({ children }) => (
  <>
    <div className="sm:hidden">
      <NavbarMenuDropdownContainer>
        {children}
      </NavbarMenuDropdownContainer>
    </div>
    <div className="hidden sm:block">
      {children}
    </div>
  </>
);

export default NavbarMenuView;
