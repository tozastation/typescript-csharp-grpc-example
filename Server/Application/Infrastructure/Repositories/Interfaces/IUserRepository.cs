using System.Collections.Generic;
using Model.Local;
using Proto.User;

namespace Repositories
{
    public interface IUserRepository
    {
        User FindUserByUserToken(string token);
        string CreateUser(PostUser user);
    }
}