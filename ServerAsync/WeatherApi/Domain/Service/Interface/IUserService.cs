using System.Threading.Tasks;
using Proto.User;
using WeatherApi.Infrastructure.Persistence.Model.DB;

namespace WeatherApi.Domain.Service.Interface
{
    public interface IUserService
    {
        Task<User> FindUserByUserTokenAsync(string token);
        Task<string> CreateUserAsync(PostUser user);
        Task<string> LoginUserAsync(string uID, string password);
    }
}