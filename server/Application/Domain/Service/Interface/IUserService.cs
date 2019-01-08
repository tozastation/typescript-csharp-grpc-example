using System.Collections.Generic;
using Proto.User;

namespace Service
{
    public interface IUserService
    {
        List<User> FindUserByUserToken(string token);
        string CreateUser(User user);
    }
}