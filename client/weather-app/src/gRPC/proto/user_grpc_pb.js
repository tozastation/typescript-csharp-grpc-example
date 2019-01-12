// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_proto_user_GetRequest(arg) {
  if (!(arg instanceof user_pb.GetRequest)) {
    throw new Error('Expected argument of type proto.user.GetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_user_GetRequest(buffer_arg) {
  return user_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_user_GetResponse(arg) {
  if (!(arg instanceof user_pb.GetResponse)) {
    throw new Error('Expected argument of type proto.user.GetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_user_GetResponse(buffer_arg) {
  return user_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_user_PostRequest(arg) {
  if (!(arg instanceof user_pb.PostRequest)) {
    throw new Error('Expected argument of type proto.user.PostRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_user_PostRequest(buffer_arg) {
  return user_pb.PostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_user_PostResponse(arg) {
  if (!(arg instanceof user_pb.PostResponse)) {
    throw new Error('Expected argument of type proto.user.PostResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_user_PostResponse(buffer_arg) {
  return user_pb.PostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  get: {
    path: '/proto.user.Users/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: user_pb.GetResponse,
    requestSerialize: serialize_proto_user_GetRequest,
    requestDeserialize: deserialize_proto_user_GetRequest,
    responseSerialize: serialize_proto_user_GetResponse,
    responseDeserialize: deserialize_proto_user_GetResponse,
  },
  post: {
    path: '/proto.user.Users/Post',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.PostRequest,
    responseType: user_pb.PostResponse,
    requestSerialize: serialize_proto_user_PostRequest,
    requestDeserialize: deserialize_proto_user_PostRequest,
    responseSerialize: serialize_proto_user_PostResponse,
    responseDeserialize: deserialize_proto_user_PostResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
