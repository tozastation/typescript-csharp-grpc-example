using System.Collections.Generic;
using Proto.User;

namespace Service
{
    public interface IUserService
    {
        GetUser FindUserByUserToken(string token);
        string CreateUser(PostUser user);

        string LoginUser(string uID, string password);
    }
}