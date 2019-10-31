import { emittersCreator } from './emittersCreator';
import { createEmitter } from './createEmitter';

export type SocketEmitter<T> = (socket: SocketIO.Socket) => (value: T) => void;

export interface SocketEmitters<T>{
  success: SocketEmitter<T | undefined>;
  fail: SocketEmitter<string>;
}

export const createEmitters = emittersCreator(createEmitter);
