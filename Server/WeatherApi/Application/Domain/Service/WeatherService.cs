using WeatherApi.Application.Domain.Model.DB;
using Proto.Weather;
using System.Collections.Generic;
using WeatherApi.Application.Domain.Service.Interface;
using WeatherApi.Application.Infrastructure.Repositories;

namespace WeatherApi.Application.Domain.Service
{
    public class WeatherService : IWeatherService
    {
        private readonly WeatherRepository _weatherRepository;
        public WeatherService()
        {
            _weatherRepository = new WeatherRepository();
        }
        public List<Weather> FindCurrentWeatherByCityName(string cityName)
        {
            List<DbCurrentWeather> dbCurrentWeatherList = _weatherRepository.FindCurrentWeatherByCityName(cityName);
            var currentWeatherList = new List<Weather>();
            foreach (DbCurrentWeather a in dbCurrentWeatherList)
            {
               var weather = new Weather();
               weather.ID = a.Id;
               weather.TempMax = a.Main.TempMax;
               weather.TempMin = a.Main.TempMin;
               weather.Type = a.Weather[0].Main;
               weather.Wind = a.Wind.Speed;
               weather.Description = a.Weather[0].Description;
               currentWeatherList.Add(weather);
            }
            return currentWeatherList;
        }
    }
}
