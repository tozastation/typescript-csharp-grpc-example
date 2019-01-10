using System.Collections.Generic;
using DB;
using Proto.User;

namespace Repositories
{
    public interface IUserRepository
    {
        List<DbUser> FindUserByUserToken(string token);
        string CreateUser(PostUser user);
    }
}