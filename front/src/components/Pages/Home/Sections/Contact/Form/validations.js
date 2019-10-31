import {
  validationIsEmptyMessage,
  validationIsEmailMessage,
  validationIsLengthMessage
} from './translations';

export const validations = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: validationIsEmptyMessage('name'),
  },
  {
    field: 'name',
    method: 'isLength',
    args: [{
      min: 3,
      max: 80
    }],
    validWhen: true,
    message: validationIsLengthMessage('name', { min: 3, max: 80 }),
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: validationIsEmptyMessage('email'),
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: validationIsEmailMessage('email'),
  },
  {
    field: 'message',
    method: 'isEmpty',
    validWhen: false,
    message: validationIsEmptyMessage('message'),
  },
  {
    field: 'message',
    method: 'isLength',
    args: [{
      min: 10,
      max: 5000
    }],
    validWhen: true,
    message: validationIsLengthMessage('message', { min: 10, max: 5000 }),
  },
];
