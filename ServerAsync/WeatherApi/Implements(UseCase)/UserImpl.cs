using Proto.User;
using System.Threading.Tasks;
using Grpc.Core;
using WeatherApi.Domain.Service.Interface;
using WeatherApi.Domain.Repository;
using System;
using WeatherApi.Infrastructure.Persistence.Model.DB;

namespace WeatherApi.Implements
{
    public class UserImpl : Users.UsersBase
    {
        IUserService service;

        public UserImpl(IUserService _service)
        {
            service = _service ?? throw new ArgumentNullException(nameof(IUserService));
        }

        public override async Task<GetResponse> GetAsync(GetRequest request, ServerCallContext context)
        {
            string requestToken = request.Token;
            var dbUser = await service.FindUserByUserTokenAsync(requestToken);
            var res = new GetResponse
            {
                User = _DBUsertoGetUser(dbUser)
            };
            return res;
        }

        public override async Task<PostResponse> PostAsync(PostRequest request, ServerCallContext context)
        {
            var viewUser = request.User;
            var cityName = await service.CreateUserAsync(viewUser);
            var res = new PostResponse
            {
                CityName = cityName
            };
            return res;
        }

        public override async Task<LoginResponse> LoginAsync(LoginRequest request, ServerCallContext context)
        {
            string uID = request.UserID;
            string password = request.Password;
            var cityName = await service.LoginUserAsync(uID, password);
            var res = new LoginResponse
            {
                CityName = cityName
            };
            return res;
        }

        private GetUser _DBUsertoGetUser(User user)
        {
            return new GetUser
            {
                CityName = user.CityName,
                Name = user.Name
            };
        }

        private User _PostUsertoDBUser(PostUser user)
        {
            return new User
            {
                CityName = user.CityName,
                Name = user.Name
            };
        }
    }
}