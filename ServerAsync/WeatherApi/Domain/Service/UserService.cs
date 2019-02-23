using WeatherApi.Domain.Service.Interface;
using Proto.User;
using WeatherApi.Domain.Repository;
using System;
using WeatherApi.Infrastructure.Persistence.Model.DB;
using System.Threading.Tasks;
using System.Text;
using System.Security.Cryptography;
using System.IO;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace WeatherApi.Domain.Service
{
    public class UserService : IUserService
    {
        IUserRepository repository;

        public UserService(IUserRepository _repository)
        {
            repository = _repository ?? throw new ArgumentNullException(nameof(IUserRepository));
        }

        public async Task<User> FindUserByUserTokenAsync(string token)
        {
            User user = await repository.FindUserByUserTokenAsync(token);
            return user;
        }

        public async Task<string> CreateUserAsync(PostUser user)
        {
            var dbUser = _PostUsertoDB(user);
            string cityName = await repository.CreateUserAsync(dbUser);
            return cityName;
        }

        public async Task<string> LoginUserAsync(string uID, string password)
        {
            string cityName = await repository.LoginAsync(uID, password);
            return cityName;
        }

        private User _PostUsertoDB(PostUser user)
        {
            User dbUser = new User
            {
                CityName = user.CityName,
                Name = user.Name,
                Password = _GetHashedTextString(user.Password),
                AccessToken = _BuildToken(user.Name, user.CityName)
            };
            return dbUser;
        }

        private string _GetHashedTextString(string passwd)
        {
            byte[] byteValues = Encoding.UTF8.GetBytes(passwd);
            SHA256 crypto256 = new SHA256CryptoServiceProvider();
            byte[] hash256Value = crypto256.ComputeHash(byteValues);
            StringBuilder hashedText = new StringBuilder();
            for (int i = 0; i < hash256Value.Length; i++)
            {
                hashedText.AppendFormat("{0:X2}", hash256Value[i]);
            }
            return hashedText.ToString();
        }

        private string _BuildToken(string name, string cityName)
        {
            string text = File.ReadAllText(@"./Domain/Service/Secret/private-key.pem", Encoding.UTF8);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(text));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub, name),
                new Claim(ClaimTypes.Name, name),
                new Claim(ClaimTypes.Country, cityName)
            };

            var token = new JwtSecurityToken
            (
                issuer: "tozastation",
                audience: "tozastation.com",
                claims: claims,
                expires: DateTime.UtcNow.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
