import React from 'react';
import i18n from 'i18next';
import { connect } from 'dynamic-redux';

import Loading from '../../Pages/Loading';

const mapStateToProps = 'router: cachedComponents';
const mapDispatchToProps = 'router: mergeCachedComponents';

class AsyncComponent extends React.PureComponent  {

  state = {
    Component: null
  }

  componentDidMount() {
    const { Component } = this.state;
    const { moduleProvider, name, namespaces } = this.props;

    const cachedComponent = this.getComponent();

    namespaces.unshift(name.toLowerCase());

    Promise.all(namespaces.map(n => i18n.loadNamespaces(n)))
      .then(() => {
        if (cachedComponent) {
          this.setPreviousComponent(cachedComponent);
          this.setState({ Component: cachedComponent });
        } else if (!Component) {
          moduleProvider().then(this.componentSetter);
        }
      })
      .catch(err => {
        throw new Error(`A namespace couldn't be loaded. It is likely the file doesn't exists.\nNamespaces: ${namespaces.join(', ')} \n${err}`);
      });
  }

  /**
   * set the component into the redux store
   * @param {ReactComponent} Component
   */
  cacheComponent = Component => {
    const { name, mergeCachedComponents } = this.props;

    mergeCachedComponents({ [name]: Component });
  }

  /**
   * get the demanded component if it exists in the store
   * @returns {ReactComponent | undefined}
   */
  getComponent = () => {
    const { name, cachedComponents } = this.props;

    return cachedComponents[name];
  }

  /**
   * set the component into the state and the store
   * @param {Object} data
   */
  componentSetter = data => {
    const _exports = Object.values(data);
    const Component = _exports[0];

    this.cacheComponent(Component);
    this.setState({ Component });
  }

  /**
   * render the current Component if it has finished to load
   * @returns {ReactElement}
   */
  renderComponentLoaded = () => {
    const { Component } = this.state;
    const { moduleProvider, name, ...props } = this.props;

    return <Component {...props} />;
  }

  /**
   * render the loading page until the demanded Component finish the load
   * @returns {ReactElement}
   */
  renderComponentLoading = () => {
    const { name } = this.props;

    return <Loading name={name} />;
  }

  render() {
    const { Component } = this.state;
    const { fallback } = this.props;

    return (
      <div>
        {Component ? this.renderComponentLoaded() : fallback && this.renderComponentLoading()}
      </div>
    );
  }
}

AsyncComponent.defaultProps = {
  fallback: true,
  namespaces: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncComponent);
