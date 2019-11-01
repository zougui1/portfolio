import nodeMailer from 'nodemailer';

export class Mail {

  private to?: string;
  private subject?: string;
  private message?: string;

  constructor(to?: string, subject?: string, message?: string) {
    this.to = to;
    this.subject = subject;
    this.message = message;
  }

  public sendMail() {
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: this.to,
      subject: this.subject,
      text: this.message,
    };

    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
    });

    return transporter.sendMail(mailOptions);
  }
}
