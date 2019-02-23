using System.Collections.Generic;
using System.Threading.Tasks;
using Proto.Weather;

namespace WeatherApi.Domain.Service.Interface
{
    public interface IWeatherService
    {
        Task<List<Weather>> FindCurrentWeatherByCityNameAsync(string cityName);
    }
}