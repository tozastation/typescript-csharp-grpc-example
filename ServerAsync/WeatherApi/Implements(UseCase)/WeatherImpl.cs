using Proto.Weather;
using System.Threading.Tasks;
using Grpc.Core;
using System;
using WeatherApi.Domain.Service.Interface;

namespace WeatherApi.Application.Implements
{
    public class WeatherImpl: Weathers.WeathersBase
    {
        IWeatherService service;
        public WeatherImpl(IWeatherService _service) 
        {
            service = _service ?? throw new ArgumentNullException(nameof(IWeatherService));
        }

        public override async Task<GetResponse> GetAsync(GetRequest request, ServerCallContext context)
        {
            GrpcEnvironment.Logger.Info("[START] RPC is Called from Client");
            string cityName = request.CityName;
            GrpcEnvironment.Logger.Info("[INPUT] cityName=" + cityName);
            var weathers = await service.FindCurrentWeatherByCityNameAsync(cityName);
            var res = new GetResponse
            {
                Weather = weathers[0]
            };
            GrpcEnvironment.Logger.Info("[END] RPC is Called from Client");
            return res;
        }
    }
}