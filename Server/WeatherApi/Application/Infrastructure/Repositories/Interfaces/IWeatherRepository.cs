using System.Collections.Generic;
using System.Threading.Tasks;
using WeatherApi.Application.Domain.Model.DB;

namespace WeatherApi.Application.Infrastructure.Repositories.Interfaces
{
    public interface IWeatherRepository
    {
        List<DbCurrentWeather> FindCurrentWeatherByCityName(string CityName);
    }
}