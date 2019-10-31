import React from 'react';

import LoaderView from './Loader-view';
import { dispatcher } from './actions';

class LoaderContainer extends React.PureComponent {

  state = {
    canRedirect: false,
  };

  componentDidUpdate(prevProps) {
    const { redirection, success, timeout } = this.props;

    /**
     * if there is a redirection and the loading is completed
     * we make the redirection after a timeout
     */
    if (redirection && success && success !== prevProps.success) {
      setTimeout(() => {
        this.setState({ canRedirect: true })
      }, timeout == null
          ? 1500
          : timeout
      );
    }
  }

  render() {
    const { canRedirect } = this.state;
    const {
      // general props
      classes,
      className,
      // loading props
      loadingMessage,
      color,
      size,
      thickness,
      // success props
      successMessage,
      redirection,
      // error props
      errorMessage,
      // info props
      infoMessage,
     } = this.props;

    return <LoaderView
      // general props
      classes={classes}
      className={className}
      dispatcher={dispatcher(this.props)}
      // loading props
      loadingMessage={loadingMessage}
      color={color}
      size={size}
      thickness={thickness}
      // success props
      successMessage={successMessage}
      canRedirect={canRedirect}
      redirection={redirection}
      // error props
      errorMessage={errorMessage}
      // info props
      infoMessage={infoMessage}
    />
  }
}

LoaderContainer.defaultProps = {
  color: 'secondary',
  size: 40,
  thickness: 5,
  classes: {},
};

export default LoaderContainer;
