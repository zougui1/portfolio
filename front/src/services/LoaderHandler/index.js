import React from 'react';
import _ from 'lodash';

import Loader from '../../components/Shared/Loader';
import { createSetLoader, initSetLoader, defaultLoader } from './actions';

export class LoaderHandler {

  // we don't want to get a reference to the `defaultLoader`
  loader = { ...defaultLoader };
  // list of the timeouts to clear before the component unmounts
  timeouts = [];

  constructor(thisArg) {
    // the second parameter is used to update the component
    this.setLoader = createSetLoader(this, thisArg);

    // add custom function to `this.setLoader` to simplify the change of the loader's state
    initSetLoader(this);

    // get `componentWillUnmount` of the caller if it exists and is a function
    const callerUnmount = _.isFunction(thisArg.componentWillUnmount)
      ? thisArg.componentWillUnmount
      : () => { };

    // replace the caller's `componentWillUnmount` with another function
    // that will call its `componentWillUnmount` with the one of the current instance
    thisArg.componentWillUnmount = () => {
      // call and give it its context so that it keeps its context
      callerUnmount.call(thisArg);
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  Loader = props => <Loader {...props} {...this.loader} />;
}
