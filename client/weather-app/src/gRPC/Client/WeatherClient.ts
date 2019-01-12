import * as grpc from 'grpc';
import * as weather_grpc from '../proto/weather_grpc_pb';
import * as weather from '../proto/weather_pb';
import {root} from '../EndPoints';

const weatherClient = new weather_grpc.WeathersClient(
    root,
    grpc.credentials.createInsecure(),
);

// イメージ: [GET] /weathers
function getWeather(cityName: string): weather.GetResponse {
    const req = new weather.GetRequest;
    var res = new weather.GetResponse;
    req.setCityname(cityName);
    weatherClient.get(req, function(error, result) {
        if (error) console.log('Error: ', error);
        else res.setWeather = result.getWeather;
    });
    return res
}