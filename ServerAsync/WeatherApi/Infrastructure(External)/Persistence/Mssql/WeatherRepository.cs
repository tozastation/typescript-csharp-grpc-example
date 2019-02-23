using System.Collections.Generic;
using System.Net;
using Grpc.Core;
using System;
using System.Threading.Tasks;
using WeatherApi.Domain.Repository;
using WeatherApi.Infrastructure.Persistence.Model.Remote;
using WeatherApi.Infrastructure.Persistence.Endpoints;

namespace WeatherApi.Application.Infrastructure.Repositories
{
    public class WeatherRepository: IWeatherRepository
    {

        public async Task<List<DbCurrentWeather>> FindCurrentWeatherByCityNameAsync(string cityName)
        {
            GrpcEnvironment.Logger.Info("[START] FindCurrentWeatherByCityNameRepository is Called from WeatherService");
            string patameter = "?q=" + cityName;
            string ROOT_URL = OpenWeatherMap.ROOT_URL;
            string APP_KEY = OpenWeatherMap.APP_KEY;
            string url =  ROOT_URL + patameter + APP_KEY;
            var weatherList = new List<DbCurrentWeather>();
            try
            {
                using (WebClient webClient = new WebClient())
                {
                    string json = await webClient.DownloadStringTaskAsync(url);
                    DbCurrentWeather currentWeather = DbCurrentWeather.FromJson(json);
                    weatherList.Add(currentWeather);
                }
            }
            catch(Exception ex)
            {
                GrpcEnvironment.Logger.Error("[EXECUTE FAILURE!] " + ex.Message);
                GrpcEnvironment.Logger.Error("[Cause by] " + ex.StackTrace);
            }
            GrpcEnvironment.Logger.Info("[END] FindCurrentWeatherByCityNameRepository is Called from WeatherService");
            return weatherList;
        }
    }
}