import React from 'react';
import classNames from 'classnames';

import LoaderSpinner from './Spinner';
import LoaderSuccessMessage from './SuccessMessage';
import LoaderErrorMessage from './ErrorMessage';
import LoaderInfoMessage from './InfoMessage';

const LoaderView = ({
  // general props
  className,
  classes,
  dispatcher,
  // loading props
  loadingMessage,
  color,
  size,
  thickness,
  // success props
  successMessage,
  canRedirect,
  redirection,
  // error props
  errorMessage,
  // info props
  infoMessage,
}) => (
  <div className={classNames(className)}>
    {dispatcher({
      loading: <LoaderSpinner
        color={color}
        size={size}
        thickness={thickness}
        message={loadingMessage}
        className={classes.loading}
      />,

      success: <LoaderSuccessMessage
        message={successMessage}
        canRedirect={canRedirect}
        redirection={redirection}
        className={classes.success}
      />,

      error: <LoaderErrorMessage
        message={errorMessage}
        className={classes.error}
      />,

      info: <LoaderInfoMessage
        message={infoMessage}
        className={classes.info}
      />
    })}
  </div>
);

export default LoaderView;
