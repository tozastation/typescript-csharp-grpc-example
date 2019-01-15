export class GetRequest {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  toObject(): GetRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    token: string;
  }
}

export class GetResponse {
  constructor ();
  getUser(): GetUser;
  setUser(a: GetUser): void;
  toObject(): GetResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    user: GetUser;
  }
}

export class GetUser {
  constructor ();
  getUserid(): string;
  setUserid(a: string): void;
  getCityname(): string;
  setCityname(a: string): void;
  getName(): string;
  setName(a: string): void;
  toObject(): GetUser.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUser;
}

export namespace GetUser {
  export type AsObject = {
    userid: string;
    cityname: string;
    name: string;
  }
}

export class PostRequest {
  constructor ();
  getUser(): PostUser;
  setUser(a: PostUser): void;
  toObject(): PostRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostRequest;
}

export namespace PostRequest {
  export type AsObject = {
    user: PostUser;
  }
}

export class PostResponse {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  toObject(): PostResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostResponse;
}

export namespace PostResponse {
  export type AsObject = {
    token: string;
  }
}

export class PostUser {
  constructor ();
  getUserid(): string;
  setUserid(a: string): void;
  getCityname(): string;
  setCityname(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getName(): string;
  setName(a: string): void;
  toObject(): PostUser.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostUser;
}

export namespace PostUser {
  export type AsObject = {
    userid: string;
    cityname: string;
    password: string;
    name: string;
  }
}

