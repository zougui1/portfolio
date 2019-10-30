import React from 'react';
import classNames from 'classnames';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import './Input.scss';

const InputView = ({
  className,
  FormControlProps,
  LabelProps,
  error,
  fullWidth,
  variant,
  id,
  label,
  value,
  onChange,
  type,
  FormHelperTextProps,
  helperText,
  ...InputProps
}) => (
  <FormControl
    {...FormControlProps}
    className={classNames('custom-field', FormControlProps.className)}
    error={Boolean(error)}
    fullWidth={fullWidth}
  >
    <InputLabel {...LabelProps} variant={variant} htmlFor={id}>{label}</InputLabel>

    <Input
      {...InputProps}
      value={value}
      id={id}
      onChange={onChange}
      type={type}
      fullWidth={fullWidth}
      className={classNames('custom-input', className)}
    />

    <FormHelperText
      {...FormHelperTextProps}
      className={classNames('helper', FormHelperTextProps.className)}
    >
      { error ? error : helperText }
    </FormHelperText>
  </FormControl>
);

InputView.defaultProps = {
  FormControlProps: {},
  FormHelperTextProps: {},
  LabelProps: {},
  variant: 'standard',
  type: 'text',
};

export default InputView;
