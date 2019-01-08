using System.Collections.Generic;
using System.Threading.Tasks;
using DB;

namespace Repositories
{
    public interface IWeatherRepository
    {
        List<DbCurrentWeather> FindCurrentWeatherByCityName(string CityName);
    }
}