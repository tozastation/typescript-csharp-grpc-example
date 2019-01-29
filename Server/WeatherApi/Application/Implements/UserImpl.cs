using Proto.User;
using System.Threading.Tasks;
using Grpc.Core;
using WeatherApi.Application.Domain.Service.Interface;
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
            var Response = new PostResponse();
            Response.CityName = this.service.CreateUser(user);
            return Task.FromResult(Response);
        }

        public override Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
        {
            string uID = request.UserID;
            string password = request.Password;
            var Response = new LoginResponse();
            Response.CityName = this.service.LoginUser(uID, password);
            return Task.FromResult(Response);
        }
    }
}