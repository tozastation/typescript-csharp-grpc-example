using System.Collections.Generic;
using Proto.User;

namespace Service
{
    public interface IUserService
    {
        List<GetUser> FindUserByUserToken(string token);
        string CreateUser(PostUser user);
    }
}