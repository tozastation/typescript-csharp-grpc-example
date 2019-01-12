// package: proto.weather
// file: weather.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Weather extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getCityname(): string;
    setCityname(value: string): void;

    getTempmax(): number;
    setTempmax(value: number): void;

    getTempmin(): number;
    setTempmin(value: number): void;

    getWind(): number;
    setWind(value: number): void;

    getType(): string;
    setType(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Weather.AsObject;
    static toObject(includeInstance: boolean, msg: Weather): Weather.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Weather, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Weather;
    static deserializeBinaryFromReader(message: Weather, reader: jspb.BinaryReader): Weather;
}

export namespace Weather {
    export type AsObject = {
        id: number,
        cityname: string,
        tempmax: number,
        tempmin: number,
        wind: number,
        type: string,
        description: string,
    }
}

export class GetRequest extends jspb.Message { 
    getCityname(): string;
    setCityname(value: string): void;


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
        cityname: string,
    }
}

export class GetResponse extends jspb.Message { 

    hasWeather(): boolean;
    clearWeather(): void;
    getWeather(): Weather | undefined;
    setWeather(value?: Weather): void;


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
        weather?: Weather.AsObject,
    }
}
