// same as `SocketIO.Socket` but can use indexing
export interface SocketIo extends SocketIO.Socket {
  [str: string]: any;
}

/**
 * the base for socket actions
 * @param {String} action
 * @returns {Function}
 */
export const baseSocket = (action: string) =>
  (eventName: string) =>
    (socket: SocketIo) =>
      <T>(data: T) =>
        socket[action](eventName, data);
