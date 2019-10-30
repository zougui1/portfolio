export const onInputChange = thisArg => name => e => {
  thisArg.setState({ [name]: e.target.value });
}
