import React from 'react';
import FormValidator from 'form-validator';

import { LoaderHandler } from '../../../../../../services';
import ContactFormView from './ContactForm-view';
import { onInputChange } from './actions';
import { validations } from './validations';
import ContactFormSocket from './ContactForm-socket';
import WithTrans from '../../../../../Shared/WithTrans';

class ContactFormContainer extends React.PureComponent {

  validator = new FormValidator(validations);
  socket = new ContactFormSocket(this);
  loader = new LoaderHandler(this);

  state = {
    name: '',
    email: '',
    message: '',
    validation: this.validator.valid(),
    submitted: false
  };

  componentDidMount() {
    this.socket.init();
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, name, message } = this.state;

    this.setState({ submitted: true });

    const validation = this.validator.validate(this.state);

    if (validation.isValid) {
      this.loader.setLoader.loading(
        <WithTrans i18nKey="home:contact.form.loader.loading">
          Sending the message...
        </WithTrans>
      );

      this.socket.emit('sendEmail')({ email: email, name: name, message: message });
    }
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
      Loader={this.loader.Loader}
    />;
  }
}

export default ContactFormContainer;
