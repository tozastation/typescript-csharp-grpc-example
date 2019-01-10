using System.Collections.Generic;
using Proto.Weather;

namespace Service
{
    public interface IWeatherService
    {
        List<Weather> FindCurrentWeatherByCityName(string cityName);
    }
}