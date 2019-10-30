const setStateAnchorEl = thisArg =>
  anchorEl =>
    thisArg.setState({ anchorEl });

export const anchorEl = thisArg => {
  const setAnchorEl = setStateAnchorEl(thisArg);

  return {
    set: e => setAnchorEl(e.currentTarget),
    delete: () => setAnchorEl(null),
    get: thisArg.state.anchorEl
  };
}
