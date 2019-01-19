using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data.Common;
using System.Threading.Tasks;
using Application;
using System.Net;
using Endpoints;
using DB;
namespace Repositories
{
    public class WeatherRepository:IWeatherRepository
    {

        public List<DbCurrentWeather> FindCurrentWeatherByCityName(string cityName)
        {   
            string patameter = "?q=" + cityName;
            string ROOT_URL = OpenWeatherMap.ROOT_URL;
            string APP_KEY = OpenWeatherMap.APP_KEY;
            string url =  ROOT_URL + patameter + APP_KEY;
            var weatherList = new List<DbCurrentWeather>();
            using(WebClient webClient = new WebClient())
            {
                string json = webClient.DownloadString(url);
                DbCurrentWeather currentWeather = DbCurrentWeather.FromJson(json);
                weatherList.Add(currentWeather);
            }
            return weatherList;
        }

    }
}