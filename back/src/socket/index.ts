import { io, debug } from '../config';
import { SocketHandlerBuilder } from '../services';
import { Contact } from './Contact';

io.on('connection', socket => {
  debug.socket('connection');

  SocketHandlerBuilder.listenHandlers(socket, [
    new Contact(),
  ]);
});
