import * as weather_grpc from '../proto/WeatherServiceClientPb'
import * as weather from '../proto/weather_pb';
import {root} from '../EndPoints';

const weatherClient = new weather_grpc.WeathersClient(
    root,
    {},
    {}
);

// イメージ: [GET] /weathers

export async function getWeather(cityName: string) {
    const req = new weather.GetRequest;
    const res = new weather.GetResponse;
    req.setCityname(cityName);
    console.log('api');
    weatherClient.get(req, {}, (error, result) => {
        if (error) {
            console.log(JSON.stringify(error));
            throw error;
        } else {
            console.log(JSON.stringify(result.getWeather()));
            res.setWeather(result.getWeather());
        }
    })
    console.log(JSON.stringify(res.getWeather()));
    return {res};
}