import _ from 'lodash';

import { SocketHandler, ListenerCallback, Emitters } from './SocketHandlerBuilder.types';
import { createEmitters, SocketEmitters } from './emit';
import { createListener } from './on';
import { SocketIo } from './baseSocket';

/**
 * create an event listener simply with its success and fail emitters
 */
export class SocketHandlerBuilder<T>{

  /**
   * @property {String} eventName
   * @private
   */
  private eventName: string;

  /**
   * @property {String} propName
   * @private
   */
  private propName: string;

  /**
   * contains the success and fail emitters
   * @property {SocketEmitters} emitterCreator
   */
  private emitterCreator!: SocketEmitters<T>;

  /**
   * contains the event listener
   * @property {SocketHandler} listenerCreator
   * @private
   */
  private listenerCreator!: SocketHandler;

  public success!: Emitters.SuccessEmitter<T>;
  public fail!: Emitters.FailEmitter;

  public constructor(eventName: string, propName: string = 'data') {
    this.eventName = eventName;
    this.propName = propName;
    this.createEmitters();
  }

  private createEmitters() {
    this.emitterCreator = createEmitters<T>(this.eventName, this.propName);
    return this;
  }

  public createListener(callback: ListenerCallback<T>) {
    this.listenerCreator = createListener(this.eventName, this.emitterCreator, this)(callback);
    return this;
  }

  public listen(socket?: SocketIo) {
    if (socket) {
      return this.listenerCreator(socket);
    }

    return this.listenerCreator;
  }

  /**
   * listen all the handlers from an array of objects that contains the handlers
   */
  public static listenHandlers(socket: SocketIo, handlersObjects: any[]) {
    let handlers: any[] = [];

    // get all the handlers from the objects
    for (let i = 0; i < handlersObjects.length; i++) {
      handlers = [
        ...handlers,
        ...Object.values(handlersObjects[i])
      ];
    }

    // listen all the handlers
    for (let i = 0; i < handlers.length; i++) {
      const handler = handlers[i];

      if (_.isFunction(handler.listen)) {
        handler.listen(socket);
      }
    }
  }
}
