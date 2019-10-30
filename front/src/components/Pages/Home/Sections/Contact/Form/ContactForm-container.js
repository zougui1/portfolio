import React from 'react';
import FormValidator from 'form-validator';

import ContactFormView from './ContactForm-view';
import { onInputChange } from './actions';
import { validations } from './validations';

class ContactFormContainer extends React.PureComponent {

  validator = new FormValidator(validations);

  state = {
    name: '',
    email: '',
    message: '',
    validation: this.validator.valid(),
    submitted: false
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
  }

  render() {
    const { name, email, message, submitted } = this.state;

    let validation = submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return <ContactFormView
      name={name}
      email={email}
      message={message}
      onChange={onInputChange(this)}
      validation={validation}
      onSubmit={this.onSubmit}
    />
  }
}

export default ContactFormContainer;
