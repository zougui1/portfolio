export type SocketEmitter<T> = (socket: SocketIO.Socket, value: T) => void;
export type SocketHandler = (socket: SocketIO.Socket) => void;
export type ListenerCallback<T> = (data: T, emit: CoupleEmitter<T>) => any;

export interface CoupleSocketEmitter <T>{
  success: SocketEmitter<T | undefined>;
  fail: SocketEmitter<string>;
}

export namespace Emitters {

  export type BaseEmitter<T> = (data: T) => void;
  export type SuccessEmitter<T> = BaseEmitter<T | undefined>;
  export type FailEmitter = BaseEmitter<string>;

  export type BaseSocket<T> = (socket: SocketIo) => T;

  export type BaseSocketEmitter<T> = (socket: SocketIo) => T;
  export type SuccessSocketEmitter<T> = BaseSocketEmitter<SuccessEmitter<T>>;
  export type FailSocketEmitter = BaseSocketEmitter<FailEmitter>;

  export type ListenerCallback<T> = (data: T, emit: CoupleEmitter<T>) => any;

  export interface CoupleEmitter<T>{
    success: SuccessEmitter<T>;
    fail: FailEmitter;
  }
}
