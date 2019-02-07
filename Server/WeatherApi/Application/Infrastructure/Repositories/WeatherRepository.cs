using System.Collections.Generic;
using System.Net;
using WeatherApi.Application.Infrastructure.Repositories.Endpoints;
using WeatherApi.Application.Domain.Model.DB;
using WeatherApi.Application.Infrastructure.Repositories.Interfaces;
using Grpc.Core;
using System;

namespace WeatherApi.Application.Infrastructure.Repositories
{
    public class WeatherRepository:IWeatherRepository
    {

        public List<DbCurrentWeather> FindCurrentWeatherByCityName(string cityName)
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
                    string json = webClient.DownloadString(url);
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