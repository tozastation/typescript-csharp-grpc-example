// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var weather_pb = require('./weather_pb.js');

function serialize_proto_weather_GetRequest(arg) {
  if (!(arg instanceof weather_pb.GetRequest)) {
    throw new Error('Expected argument of type proto.weather.GetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_weather_GetRequest(buffer_arg) {
  return weather_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_weather_GetResponse(arg) {
  if (!(arg instanceof weather_pb.GetResponse)) {
    throw new Error('Expected argument of type proto.weather.GetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_weather_GetResponse(buffer_arg) {
  return weather_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WeathersService = exports.WeathersService = {
  get: {
    path: '/proto.weather.Weathers/Get',
    requestStream: false,
    responseStream: false,
    requestType: weather_pb.GetRequest,
    responseType: weather_pb.GetResponse,
    requestSerialize: serialize_proto_weather_GetRequest,
    requestDeserialize: deserialize_proto_weather_GetRequest,
    responseSerialize: serialize_proto_weather_GetResponse,
    responseDeserialize: deserialize_proto_weather_GetResponse,
  },
};

exports.WeathersClient = grpc.makeGenericClientConstructor(WeathersService);
