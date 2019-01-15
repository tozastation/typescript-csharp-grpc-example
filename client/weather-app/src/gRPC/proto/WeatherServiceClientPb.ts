/* tslint:disable */
/**
 * @fileoverview gRPC-Web generated client stub for proto.weather
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  GetRequest,
  GetResponse,
  Weather} from './weather_pb';

export class WeathersClient {
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

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    GetResponse,
    (request: GetRequest) => {
      return request.serializeBinary();
    },
    GetResponse.deserializeBinary
  );

  get(
    request: GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/proto.weather.Weathers/Get',
      request,
      metadata || {},
      this.methodInfoGet,
      callback);
  }

}

