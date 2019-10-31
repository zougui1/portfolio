import { baseListener } from './baseListener';
import { getSecondArgument } from './getSecondArgument';
import { SocketIo } from '../baseSocket';
import { SocketEmitters } from '../emit';
import { ListenerCallback, Emitters } from '../SocketHandlerBuilder.types';

const rSingleLineComments = /\/\/.*/g;
const rMultiLineComments = /\/\*.*\*\//g;
// test if one of `success` and `fail` from the second argument is called
const rCalledRegex = (str: string) => new RegExp(str + '\\.(success|fail)\\(.*\\)');


export const createListener = <T>(eventName: string, emit: SocketEmitters<T>, thisArg: any) =>
  (callback: ListenerCallback<T>) => (socket: SocketIo) => {

    thisArg.success = (data?: T) => emit.success(socket)(data);
    thisArg.fail = (error: string) => emit.fail(socket)(error);

    return baseListener(eventName)(async (data: T) => {
      let result: T;

      const emitter: Emitters.CoupleEmitter<T> = {
        success: thisArg.success,
        fail: thisArg.fail,
      };

      // get a string of the callback
      const callbackStr = callback.toString()
        .replace(rSingleLineComments, '') // remove all single comments from the callback
        .replace(rMultiLineComments, ''); // remove all multiline comments from the callback;

      // get the second argument of the callback
      const secondArg = getSecondArgument(callbackStr);

      try {
        result = await callback(data, emitter);
      } catch (error) {
        emit.fail(socket)(error);
        throw error;
      }

      // test if the callback emit
      const doesEmit = secondArg
        ? rCalledRegex(secondArg).test(callbackStr)
        : false;

      // if the callback doesn't emit we do it ourselves
      if (!doesEmit) {
        await emit.success(socket)(result);
      }
    })(socket);
  }
