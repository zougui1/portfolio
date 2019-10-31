import React from 'react';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

import NavLinkView from './NavLink';
import NavbarFlag from './Flag';
import NavbarMenu from './Menu';
import './Navbar.scss';

const NavbarView = ({ className }) => (
  <AppBar position="fixed" id="Navbar" className={classNames(className)}>
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid container item xs={6} sm={3} alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h6">
              <Link to="/">Jérémy</Link>
            </Typography>
          </Grid>

          <Grid item>
            <NavbarFlag />
          </Grid>
        </Grid>

        <Grid item>
          <NavbarMenu>
            <NavLinkView name="presentation" />
            <NavLinkView name="experiences" />
            <NavLinkView name="competences" />
            <NavLinkView name="contact" />
          </NavbarMenu>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavbarView;
