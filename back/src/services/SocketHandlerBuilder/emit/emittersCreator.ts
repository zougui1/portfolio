import { Emitters } from './Emitters';

export const emittersCreator = (createEmitter: Function) =>
  <T>(eventName: string, propName: string) =>
    new Emitters<T>(eventName, propName, createEmitter);
