using Proto.Weather;
using System.Collections.Generic;
using Grpc.Core;
using WeatherApi.Domain.Service.Interface;
using WeatherApi.Domain.Repository;
using WeatherApi.Infrastructure.Persistence.Model.Remote;
using System.Threading.Tasks;

namespace WeatherApi.Application.Domain.Service
{
    public class WeatherService : IWeatherService
    {
        private readonly IWeatherRepository repository;

        public WeatherService(IWeatherRepository _repository)
        {
            repository = _repository;
        }

        public async Task<List<Weather>> FindCurrentWeatherByCityNameAsync(string cityName)
        {
            GrpcEnvironment.Logger.Info("[START] FindCurrentWeatherByCityNameService is Called from WeatherImplements");
            var dbCurrentWeatherList = await repository.FindCurrentWeatherByCityNameAsync(cityName);
            var currentWeatherList = new List<Weather>();
            foreach (DbCurrentWeather a in dbCurrentWeatherList)
            {
                var weather = new Weather
                {
                    ID = a.Id,
                    TempMax = a.Main.TempMax,
                    TempMin = a.Main.TempMin,
                    Type = a.Weather[0].Main,
                    Wind = a.Wind.Speed,
                    Description = a.Weather[0].Description
                };
                currentWeatherList.Add(weather);
            }
            GrpcEnvironment.Logger.Info("[END] FindCurrentWeatherByCityNameService is Called from WeatherImplements");
            return currentWeatherList;
        }
    }
}
