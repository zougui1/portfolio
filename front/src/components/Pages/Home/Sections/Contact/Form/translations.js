import React from 'react';

import WithTrans from '../../../../../Shared/WithTrans';

export const loadingMessage = () => (
  <WithTrans i18nKey="home:contact.form.loader.loading">
    Sending the message...
  </WithTrans>
);

export const successMessage = () => (
  <WithTrans i18nKey="home:contact.form.loader.success">
    The message has been succesfully sent
  </WithTrans>
);

export const errorMessage = () => (
  <WithTrans i18nKey="home:contact.form.loader.error">
    An error occured and the message couldn't be sent
  </WithTrans>
);

export const validationIsEmptyMessage = name => (
  <WithTrans i18nKey={`home:contact.form.${name}.validations.required`}>
    The {name} is required
  </WithTrans>
);

export const validationIsLengthMessage = (name, length) => (
  <WithTrans i18nKey={`home:contact.form.${name}.validations.length`} values={length}>
    The {name} must be between {length.min} and {length.max} length
  </WithTrans>
);

export const validationIsEmailMessage = name => (
  <WithTrans i18nKey={`home:contact.form.${name}.validations.invalid`}>
    The {name} is invalid
  </WithTrans>
);
