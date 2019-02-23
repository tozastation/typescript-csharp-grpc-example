using System.Collections.Generic;
using System.Threading.Tasks;
using WeatherApi.Infrastructure.Persistence.Model.Remote;

namespace WeatherApi.Domain.Repository
{
    public interface IWeatherRepository
    {
        Task<List<DbCurrentWeather>> FindCurrentWeatherByCityNameAsync(string CityName);
    }
}