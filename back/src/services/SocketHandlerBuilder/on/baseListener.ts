import { debug } from '../../../config';
import { baseOn } from './baseOn';
import { SocketIo } from '../baseSocket';

export const baseListener = <T>(eventName: string) =>
  (callback: Function) =>
    (socket: SocketIo) => {
      baseOn(eventName)(socket)<(data: T) => void>(data => {
        debug.socket.on(eventName);
        callback(data, socket);
      });
    }
