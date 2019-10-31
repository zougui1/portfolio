export const isLoading = ({ loading, success, error, info }) => {
  return loading && !success && !error && !info;
}

export const isSuccess = ({ success, info }) => success && !info;

export const isError = ({ error }) => error;

export const isInfo = ({ info }) => info;

export const dispatcher = state => data => {
  return isLoading(state)
    ? data.loading
    : isSuccess(state)
      ? data.success
      : isError(state)
        ? data.error
        : isInfo(state)
          ? data.info
          : null;
}
