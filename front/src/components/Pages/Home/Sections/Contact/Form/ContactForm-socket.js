import React from 'react';

import { SocketBridge } from '../../../../../../services/SocketBridge';
import WithTrans from '../../../../../Shared/WithTrans';

export default class ContactFormSocket extends SocketBridge {

  init() {
    this.listen('sendEmail');
  }

  success = () => {
    this.context.loader.setLoader.success(
      <WithTrans i18nKey="home:contact.form.loader.success">
        The message has been succesfully sent
      </WithTrans>
    , 1500);
  }

  fail = () => {
    this.context.loader.setLoader.error(
      <WithTrans i18nKey="home:contact.form.loader.error">
        An error occured and the message couldn't be sent
      </WithTrans>
    , 2000);
  }
}
