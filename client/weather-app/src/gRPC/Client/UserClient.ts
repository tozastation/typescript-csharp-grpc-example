/* tslint:disable */
import * as user_grpc from '../proto/UserServiceClientPb';
import * as user from '../proto/user_pb';
import {root} from '../EndPoints';

const userClient = new user_grpc.UsersClient(
    root,
    {},
    {}
);

export const postUser = (userID: string, cityName: string, password: string, name: string) => {
    return new Promise<user.PostResponse>((resolve, reject) => {
        const req = new user.PostRequest;
        const a = new user.PostUser();
        a.setUserid(userID);
        a.setCityname(cityName);
        a.setPassword(password);
        a.setName(name);
        req.setUser(a);
        userClient.post(req, {}, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    }).then(result => {
        return { result };
    });
}
// login
export const login = (userID: string, password: string) => {
    return new Promise<user.LoginResponse>((resolve, reject) => {
        const req = new user.LoginRequest;
        req.setUserid(userID);
        req.setPassword(password);
        userClient.login(req, {}, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    }).then(result => {
        return { result };
    });
}

// [Unused]
// export function getUser(token: string): user.GetResponse {
//     const req = new user.GetRequest;
//     var res = new user.GetResponse;
//     req.setToken(token);
//     userClient.get(req, {}, function(error, result) {
//         if (error) throw error;
//         else res.setUser = result.getUser;
//     });
//     return res
// }