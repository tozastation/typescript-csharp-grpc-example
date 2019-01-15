// /* tslint:disable */
// import * as grpc from 'grpc';
// import * as user_grpc from '../proto/user_grpc_pb';
// import * as user from '../proto/user_pb';
// import {root} from '../EndPoints';

// const userClient = new user_grpc.UsersClient(
//     root,
//     grpc.credentials.createInsecure(),
// );

// // イメージ: [GET] /users
// function getUser(token: string): user.GetResponse {
//     const req = new user.GetRequest;
//     var res = new user.GetResponse;
//     req.setToken(token);
//     userClient.get(req, function(error, result) {
//         if (error) throw error;
//         else res.setUser = result.getUser;
//     });
//     return res
// }

// // イメージ: [POST] /users
// function postUser(userId: string, cityName: string, password: string, name: string): user.PostResponse {
//     const req = new user.PostRequest;
//     // [Set] new Post User
//     const a = new user.PostUser();
//     a.setName(name);
//     a.setPassword(password);
//     a.setUserid(userId);
//     a.setCityname(cityName);
//     req.setUser(a);
//     // [Send] Request
//     var res = new user.PostResponse;
//     userClient.post(req, function(error, result) {
//         if (error) throw error;
//         else res.setToken = result.getToken;
//     });
//     return res
// }