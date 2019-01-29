using System.Collections.Generic;
using Proto.User;

namespace WeatherApi.Application.Domain.Service.Interface
{
    public interface IUserService
    {
        GetUser FindUserByUserToken(string token);
        string CreateUser(PostUser user);

        string LoginUser(string uID, string password);
    }
}