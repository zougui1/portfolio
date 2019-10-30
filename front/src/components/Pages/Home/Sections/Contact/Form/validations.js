import React from 'react';

import WithTrans from '../../../../../Shared/WithTrans';

export const validations = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: <WithTrans i18nKey="home:contact.form.name.validations.required">The name is required</WithTrans>
  },
  {
    field: 'name',
    method: 'isLength',
    args: [{
      min: 3,
      max: 80
    }],
    validWhen: true,
    message: <WithTrans i18nKey="home:contact.form.name.validations.length" values={{ min: 3, max: 80 }}>The name must be between {3} and {80} length</WithTrans>
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: <WithTrans i18nKey="home:contact.form.email.validations.required">The email is required</WithTrans>
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: <WithTrans i18nKey="home:contact.form.email.validations.invalid">The email is invalid</WithTrans>
  },
  {
    field: 'message',
    method: 'isEmpty',
    validWhen: false,
    message: <WithTrans i18nKey="home:contact.form.message.validations.required">The message is required</WithTrans>
  },
  {
    field: 'message',
    method: 'isLength',
    args: [{
      min: 10,
      max: 5000
    }],
    validWhen: true,
    message: <WithTrans i18nKey="home:contact.form.message.validations.length" values={{ min: 10, max: 5000 }}>The message must be between {10} and {5000} length</WithTrans>
  },
];
