using System;
using Microsoft.Extensions.Configuration;
using WeatherApi.Application.Infrastructure;
using Grpc.Core;
using Proto.Weather;
using Proto.User;
using WeatherApi.Application.Implements;
using WeatherApi.Application.Domain.Service;
using Proto.Ping;
using Grpc.Core.Logging;

namespace Application
{
    public class Program
    {
        public static IConfigurationRoot configuration;
        public static SqlHandler sqlHandler;
        public static void Main(string[] args)
        {
            GrpcEnvironment.SetLogger(new ConsoleLogger());
            const int Port = 5000;
            var weatherImpl = new WeatherImpl(new WeatherService());
            var userImpl = new UserImpl(new UserService());
            var pingImpl = new PingImpl();
            Server server = new Server
            {
                Services = { 
                    Weathers.BindService(weatherImpl),
                    Check.BindService(pingImpl),
                    Users.BindService(userImpl)
                },
                Ports = { new ServerPort("0.0.0.0", Port, ServerCredentials.Insecure) }
            };
            server.Start();

            GrpcEnvironment.Logger.Info("[START] Tozawa server listening on port " + Port);
            GrpcEnvironment.Logger.Info("[Other] Press any key to stop the server...");
           
            Console.Read();

            server.ShutdownAsync().Wait();
        }
    }
}
