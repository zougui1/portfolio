// default `loader`'s state
export const defaultLoader = {
  success: false,
  loading: false,
  error: false,
  info: false,
  successMessage: '',
  loadingMessage: '',
  errorMessage: '',
  infoMessage: ''
};

// all the status of the loader
const loaderProperties = ['success', 'loading', 'error', 'info'];

/**
 * get a loader object with all its state properties set to `false` except the
 * property matching `type` that will be set to `true`
 * @param {String} type
 * @returns {Object}
 */
const getLoader = type => {
  const loader = {};

  // if the current prop is equal to the type it will be `true` the other will be `false`
  loaderProperties.forEach(prop => loader[prop] = type === prop);

  return loader;
}

/**
 * create a function to change the loader in the context of `thisArg`
 * with all its state properties set to `false` except the
 * property matching `type` that will be set to `true` with its message if any
 * @param {Object} thisArg caller's context
 * @param {Function} thisArg.setLoader
 * @param {String} type
 * @returns {Function}
 */
const createLoaderChanger = thisArg => type => {
  const loader = getLoader(type);

  return (message, timeout) => {
    let messageType = type + 'Message';

    if (message !== undefined) {
      loader[messageType] = message;
    }

    thisArg.setLoader(loader);

    if (timeout) {
      // if the function has a timeout then we clear the message of the current type
      thisArg.timeouts.push(setTimeout(() => thisArg.setLoader({ [messageType]: '' }), timeout));
    }
  }
}

/**
 * will init the `setLoader` function from `thisArg` to add specific utilities functions
 * @param {Object} thisArg caller's context
 * @param {Function} thisArg.setLoader the function that changes the `loader`'s state
 */
export const initSetLoader = thisArg => {
  const loaderChanger = createLoaderChanger(thisArg);

  thisArg.setLoader.success = loaderChanger('success');
  thisArg.setLoader.loading = loaderChanger('loading');
  thisArg.setLoader.error = loaderChanger('error');
  thisArg.setLoader.info = loaderChanger('info');
  thisArg.setLoader.reset = () => thisArg.setLoader(defaultLoader);
}

/**
 * loader setter used to change the `loader`'s state which must update the component to re-render the `Loader` component
 * @param {Object} thisArg caller's context
 * @param {Object} componentContext context of the component that uses `LoaderHandler`
 * @returns {Function}
 */
export const createSetLoader = (thisArg, componentContext) => data => {
  thisArg.loader = {
    ...thisArg.loader,
    ...data
  };

  componentContext.forceUpdate();
}
