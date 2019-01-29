using System.Collections.Generic;
using Proto.Weather;

namespace WeatherApi.Application.Domain.Service.Interface
{
    public interface IWeatherService
    {
        List<Weather> FindCurrentWeatherByCityName(string cityName);
    }
}