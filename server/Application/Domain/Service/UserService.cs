using Repositories;
using DB;
using Proto.User;
using System.Collections.Generic;

namespace Service
{
    public class UserService : IUserService
    {
        private readonly UserRepository _userRepository;
        public UserService()
        {
            _userRepository = new UserRepository();
        }
        
        public List<GetUser> FindUserByUserToken(string token)
        {
            List<DbUser> dbUserList = _userRepository.FindUserByUserToken(token);
            var userList = new List<GetUser>();
            foreach (DbUser a in dbUserList)
            {
               var user = new GetUser();
               user.UserID = a.LoginId;
               user.Name = a.Name;
               //user.Password = a.Password;
               user.CityName = a.CityName;
               userList.Add(user);
            }
            return userList;
        }

        public string CreateUser(PostUser user)
        {
            string token = _userRepository.CreateUser(user);
            return token;
        }
    }
}
