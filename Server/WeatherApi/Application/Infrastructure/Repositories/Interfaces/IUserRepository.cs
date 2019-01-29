using WeatherApi.Application.Domain.Model.Local;
using Proto.User;

namespace WeatherApi.Application.Infrastructure.Repositories.Interfaces
{
    public interface IUserRepository
    {
        User FindUserByUserToken(string token);
        string CreateUser(PostUser user);

        string Login(string uID, string password);
    }
}