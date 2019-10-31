import { SocketBridge } from '../../../../../../services/SocketBridge';
import { successMessage, errorMessage } from './translations';

export default class ContactFormSocket extends SocketBridge {

  init() {
    this.listen('sendEmail');
  }

  success = () => {
    this.context.loader.setLoader.success(successMessage(), 1500);
  }

  fail = () => {
    this.context.loader.setLoader.error(errorMessage(), 2000);
  }
}
