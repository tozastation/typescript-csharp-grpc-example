// package: proto.user
// file: user.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUsersService_IGet;
    post: IUsersService_IPost;
}

interface IUsersService_IGet extends grpc.MethodDefinition<user_pb.GetRequest, user_pb.GetResponse> {
    path: string; // "/proto.user.Users/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<user_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetResponse>;
}
interface IUsersService_IPost extends grpc.MethodDefinition<user_pb.PostRequest, user_pb.PostResponse> {
    path: string; // "/proto.user.Users/Post"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.PostRequest>;
    requestDeserialize: grpc.deserialize<user_pb.PostRequest>;
    responseSerialize: grpc.serialize<user_pb.PostResponse>;
    responseDeserialize: grpc.deserialize<user_pb.PostResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    get: grpc.handleUnaryCall<user_pb.GetRequest, user_pb.GetResponse>;
    post: grpc.handleUnaryCall<user_pb.PostRequest, user_pb.PostResponse>;
}

export interface IUsersClient {
    get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    post(request: user_pb.PostRequest, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
    post(request: user_pb.PostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
    post(request: user_pb.PostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public post(request: user_pb.PostRequest, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public post(request: user_pb.PostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public post(request: user_pb.PostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.PostResponse) => void): grpc.ClientUnaryCall;
}
