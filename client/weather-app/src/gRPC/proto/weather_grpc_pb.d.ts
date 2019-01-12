// package: proto.weather
// file: weather.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as weather_pb from "./weather_pb";

interface IWeathersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IWeathersService_IGet;
}

interface IWeathersService_IGet extends grpc.MethodDefinition<weather_pb.GetRequest, weather_pb.GetResponse> {
    path: string; // "/proto.weather.Weathers/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<weather_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<weather_pb.GetRequest>;
    responseSerialize: grpc.serialize<weather_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<weather_pb.GetResponse>;
}

export const WeathersService: IWeathersService;

export interface IWeathersServer {
    get: grpc.handleUnaryCall<weather_pb.GetRequest, weather_pb.GetResponse>;
}

export interface IWeathersClient {
    get(request: weather_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: weather_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: weather_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
}

export class WeathersClient extends grpc.Client implements IWeathersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: weather_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: weather_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: weather_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weather_pb.GetResponse) => void): grpc.ClientUnaryCall;
}
