import { debug } from '../../../config';
import { baseSocket, SocketIo } from '../baseSocket';

// create a socket emit with a debug message
export const createEmitter = <T>(eventName: string, propName: string, success?: boolean) =>
  (socket: SocketIo) =>
    (value?: T) => {
      debug.socket.emit(eventName);

      return baseSocket('emit')(eventName)(socket)({ success, [propName]: value });
    }
