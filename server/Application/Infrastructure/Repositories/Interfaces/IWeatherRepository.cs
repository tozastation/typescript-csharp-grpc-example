using System.Collections.Generic;
using System.Threading.Tasks;
using Remote;

namespace Repositories
{
    public interface IWeatherRepository
    {
        List<CurrentWeather> FindCurrentWeatherByCityName(string CityName);
    }
}