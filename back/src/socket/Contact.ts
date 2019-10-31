import { SocketHandlerBuilder, Mail } from '../services';

export class Contact {

  public sendEmail = new SocketHandlerBuilder<any>('sendEmail')
    .createListener(async data => {
      let message = 'Email: ' + data.email;
      message += '\n';
      message += 'Name: ' + data.name;
      message += '\n\n' + data.message;

      console.log(message)

      const mail = new Mail('jeremy.beherec@gmail.com', 'Message from: ' + data.email, message);

      await mail.sendMail();
    });
}
