import * as weather_grpc from '../proto/WeatherServiceClientPb'
import * as weather from '../proto/weather_pb';
import {root} from '../EndPoints';

const weatherClient = new weather_grpc.WeathersClient(
    root,
    {},
    {}
);

// イメージ: [GET] /weathers
export function getWeather(cityName: string): weather.GetResponse {
    const req = new weather.GetRequest;
    const res = new weather.GetResponse;
    req.setCityname(cityName);
    weatherClient.get(req, {}, function(error, result) {
        if (error) {
            throw error;
        } else {
            res.setWeather = result.getWeather;
        }
    });
    return res
}