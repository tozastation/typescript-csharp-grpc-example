using System.Collections.Generic;
using Remote;

namespace Repositories
{
    public interface IUserRepository
    {
        List<User> FindUserByUserToken(string token);
        string CreateUser(User user);
    }
}