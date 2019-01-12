// package: proto.user
// file: user.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class PostUser extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): void;

    getCityname(): string;
    setCityname(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostUser.AsObject;
    static toObject(includeInstance: boolean, msg: PostUser): PostUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostUser;
    static deserializeBinaryFromReader(message: PostUser, reader: jspb.BinaryReader): PostUser;
}

export namespace PostUser {
    export type AsObject = {
        userid: string,
        cityname: string,
        password: string,
        name: string,
    }
}

export class GetUser extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): void;

    getCityname(): string;
    setCityname(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUser.AsObject;
    static toObject(includeInstance: boolean, msg: GetUser): GetUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUser;
    static deserializeBinaryFromReader(message: GetUser, reader: jspb.BinaryReader): GetUser;
}

export namespace GetUser {
    export type AsObject = {
        userid: string,
        cityname: string,
        name: string,
    }
}

export class GetRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        token: string,
    }
}

export class GetResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): GetUser | undefined;
    setUser(value?: GetUser): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        user?: GetUser.AsObject,
    }
}

export class PostRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): PostUser | undefined;
    setUser(value?: PostUser): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostRequest): PostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRequest;
    static deserializeBinaryFromReader(message: PostRequest, reader: jspb.BinaryReader): PostRequest;
}

export namespace PostRequest {
    export type AsObject = {
        user?: PostUser.AsObject,
    }
}

export class PostResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostResponse): PostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostResponse;
    static deserializeBinaryFromReader(message: PostResponse, reader: jspb.BinaryReader): PostResponse;
}

export namespace PostResponse {
    export type AsObject = {
        token: string,
    }
}
