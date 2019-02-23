using System.Threading.Tasks;
using Proto.User;
using WeatherApi.Infrastructure.Persistence.Model.DB;

namespace WeatherApi.Domain.Repository
{
    public interface IUserRepository
    {
        Task<User> FindUserByUserTokenAsync(string token);
        Task<string> CreateUserAsync(User user);
        Task<string> LoginAsync(string uID, string password);
    }
}