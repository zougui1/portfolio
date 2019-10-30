import React from 'react';
import { Button } from '@material-ui/core';

import Input from '../../../../../Shared/Input';
import './Form.scss';

const ContactFormView = ({ name, email, message, onChange, onSubmit, validation }) => (
  <form onSubmit={onSubmit}>
    <Input
      id="name"
      value={name}
      onChange={onChange('name')}
      label="Name"
      fullWidth
      error={validation.name.message}
    />

    <Input
      id="email"
      value={email}
      onChange={onChange('email')}
      label="Email"
      fullWidth
      error={validation.email.message}
    />

    <Input
      id="message"
      value={message}
      onChange={onChange('message')}
      label="Message"
      fullWidth
      multiline
      rows="5"
      error={validation.message.message}
    />

    <div className="my-3"></div>

    <Button variant="contained" type="submit">
      <span className="font-semibold">
        Send
      </span>
    </Button>
  </form>
);

export default ContactFormView;
