export const onScroll = thisArg => () => {
  if (window.scrollY > 0) {
    thisArg.setState({ className: 'transparent' });
  } else {
    thisArg.setState({ className: '' });
  }
}
