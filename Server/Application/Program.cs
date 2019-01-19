using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Infrastructure;
using Grpc;
using Grpc.Core;
using Proto.Weather;
using Implements;
using Service;
using Proto.Ping;
namespace Application
{
    public class Program
    {
        public static IConfigurationRoot configuration;
        public static SqlHandler sqlHandler;
        public static void Main(string[] args)
        {
            const int Port = 5000;
            var weatherImpl = new WeatherImpl(new WeatherService());
            var pingImpl = new PingImpl();
            Server server = new Server
            {
                Services = { 
                    Weathers.BindService(weatherImpl),
                    Check.BindService(pingImpl)
                },
                Ports = { new ServerPort("0.0.0.0", Port, ServerCredentials.Insecure) }
            };
            server.Start();

            Console.WriteLine("Tozawa server listening on port " + Port);
            Console.WriteLine("Press any key to stop the server...");
            Console.ReadKey();

            server.ShutdownAsync().Wait();
            // configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(@"appsettings.json", false).Build(); 
            // sqlHandler = new SqlHandler();
            // CreateWebHostBuilder(args).Build().Run();
        }
    }
}
