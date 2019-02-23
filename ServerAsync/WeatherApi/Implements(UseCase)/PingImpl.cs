using System.Threading.Tasks;
using Grpc.Core;
using Proto.Ping;

namespace WeatherApi.Application.Implements
{
    public class PingImpl: Check.CheckBase
    {
        public override Task<Pong> Ping(Empty a, ServerCallContext context)
        {
            var Pong = new Pong();
            Pong.Reply = "Pong";
            return Task.FromResult(Pong);
        }
    }
}