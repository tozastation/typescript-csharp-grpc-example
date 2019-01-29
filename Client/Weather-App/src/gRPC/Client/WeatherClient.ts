import * as weather_grpc from '../proto/WeatherServiceClientPb'
import * as weather from '../proto/weather_pb';
import {root} from '../EndPoints';

const weatherClient = new weather_grpc.WeathersClient(
    root,
    {},
    {}
);

// イメージ: [GET] /weathers

export const getWeather = (cityName: string) => {
    return new Promise<weather.GetResponse>((resolve, reject) => {
        const req = new weather.GetRequest;
        req.setCityname(cityName);
        weatherClient.get(req, {}, (error, result) => {
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