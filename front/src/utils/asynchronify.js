import React from 'react';
import AsyncComponent from '../components/Shared/AsyncComponent';

export const asynchronify = (name, moduleProvider, namespaces = []) =>
  props =>
    <AsyncComponent
      {...props}
      name={name}
      moduleProvider={moduleProvider}
      namespaces={namespaces}
    />;
