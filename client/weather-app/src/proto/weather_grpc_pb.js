// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
'use strict';
var grpc = require('grpc');
var weather_pb = require('./weather_pb.js');

function serialize_proto_weather_Request(arg) {
  if (!(arg instanceof weather_pb.Request)) {
    throw new Error('Expected argument of type proto.weather.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_weather_Request(buffer_arg) {
  return weather_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_weather_Response(arg) {
  if (!(arg instanceof weather_pb.Response)) {
    throw new Error('Expected argument of type proto.weather.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_weather_Response(buffer_arg) {
  return weather_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var WeathersService = exports.WeathersService = {
  get: {
    path: '/proto.weather.Weathers/Get',
    requestStream: false,
    responseStream: false,
    requestType: weather_pb.Request,
    responseType: weather_pb.Response,
    requestSerialize: serialize_proto_weather_Request,
    requestDeserialize: deserialize_proto_weather_Request,
    responseSerialize: serialize_proto_weather_Response,
    responseDeserialize: deserialize_proto_weather_Response,
  },
};

exports.WeathersClient = grpc.makeGenericClientConstructor(WeathersService);
