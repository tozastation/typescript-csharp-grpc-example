export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Pong {
  constructor ();
  getReply(): string;
  setReply(a: string): void;
  toObject(): Pong.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Pong;
}

export namespace Pong {
  export type AsObject = {
    reply: string;
  }
}

