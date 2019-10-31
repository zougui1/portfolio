import { SocketIo } from "../baseSocket";
import { SocketEmitters } from "./createEmitters";

export class Emitters <T>{

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
   * function that will create the emitters
   * @property {Function} emitterCreator
   * @private
   */
  private emitterCreator: Function;

  public constructor(eventName: string, propName: string, emitterCreator: Function) {
    this.eventName = eventName;
    this.propName = propName;
    this.emitterCreator = emitterCreator;
  }

  private createEmitter(success: boolean, suffix: string, propName: string = this.propName) {
    return this.emitterCreator(this.eventName + suffix, propName, success);
  }

  /**
   * create a success emitter
   * @param {*} data
   * @public
   */
  public success = (socket: SocketIo) => (data?: T) => {
    this.createEmitter(true, 'Success')(socket)(data);
    return this;
  }

  /**
   * create a fail emitter
   * @param {String} error
   * @public
   */
  public fail = (socket: SocketIo) => (error: string) => {
    this.createEmitter(false, 'Fail', 'error')(socket)(error);
    return this;
  }
}
