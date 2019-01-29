/**
 * @fileoverview gRPC-Web generated client stub for proto.ping
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  Empty,
  Pong} from './ping_pb';

export class CheckClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    Pong,
    (request: Empty) => {
      return request.serializeBinary();
    },
    Pong.deserializeBinary
  );

  ping(
    request: Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Pong) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/proto.ping.Check/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

}

