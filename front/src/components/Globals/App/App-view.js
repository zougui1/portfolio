import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AsyncComponent from '../../Shared/AsyncComponent';
import Router from '../Router';

const Navbar = () => import(/* webpackChunkName: "Navbar" */ '../Navbar');

const AppView = () => (
  <BrowserRouter>
    <>
      <AsyncComponent name="Navbar" moduleProvider={Navbar} fallback={false} />
      <Router />
    </>
  </BrowserRouter>
);

export default AppView;
