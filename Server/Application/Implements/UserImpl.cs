using Proto.User;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Core.Utils;
using Service;
using System;

namespace Implements
{
    public class UserImpl: Users.UsersBase
    {
        IUserService service;
        public UserImpl(IUserService _service) : base()
        {
            if (_service == null)
            {
                throw new ArgumentNullException(nameof(IUserService));
            }
            this.service = _service;
        }
        public override Task<GetResponse> Get(GetRequest request, ServerCallContext context)
        {
            string token = request.Token;
            var user = this.service.FindUserByUserToken(token);
            var res = new GetResponse();
           res.User = user;
            return Task.FromResult(res);
        }

        public override Task<PostResponse> Post(PostRequest request, ServerCallContext context)
        {
            var user = request.User;
            Console.WriteLine(user);
            var token = this.service.CreateUser(user);
            var Response = new PostResponse();
            Response.Token = token;
            return Task.FromResult(Response);
        }
    }
}