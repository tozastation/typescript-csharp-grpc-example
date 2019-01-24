using Repositories;
using Model.Local;
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
        
        public GetUser FindUserByUserToken(string token)
        {
            User user = _userRepository.FindUserByUserToken(token);
            var u = new GetUser();
            u.UserID = user.Id;
            u.Name = user.Name;
            u.CityName = user.CityName;
            return u;
        }

        public string CreateUser(PostUser user)
        {
            string token = _userRepository.CreateUser(user);
            return token;
        }
    }
}
