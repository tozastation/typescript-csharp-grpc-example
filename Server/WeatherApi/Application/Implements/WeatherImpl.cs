using Proto.Weather;
using System.Threading.Tasks;
using Grpc.Core;
using WeatherApi.Application.Domain.Service.Interface;
using System;

namespace WeatherApi.Application.Implements
{
    public class WeatherImpl: Weathers.WeathersBase
    {
        IWeatherService service;
        public WeatherImpl(IWeatherService _service) : base()
        {
            if (_service == null)
            {
                throw new ArgumentNullException(nameof(IWeatherService));
            }
            this.service = _service;
        }
        public override Task<GetResponse> Get(GetRequest request, ServerCallContext context)
        {
            string cityName = request.CityName;
            var weathers = this.service.FindCurrentWeatherByCityName(cityName);
            var response = new GetResponse();
            response.Weather = weathers[0];
            return Task.FromResult(response);
        }
    }
}