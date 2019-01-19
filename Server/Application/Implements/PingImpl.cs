using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Core.Utils;
using Service;
using System;
using Proto.Ping;
namespace Implements
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