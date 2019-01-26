using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data.Common;
using System.Threading.Tasks;
using Application;
using Proto.User;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Text;
using Model.Local;
using Dapper;
using System.Security.Cryptography;
using System.IO;

namespace Repositories
{
    public class UserRepository:IUserRepository
    {

        private string connectionString = @"Data Source=db;Initial Catalog=Weather;Connect Timeout=60;Persist Security Info=True;User ID=sa;Password=Test@1234";
        
        private string tableName = "[Weather].[dbo].[Users]";
        public User FindUserByUserToken(String token)
        {   
            User user = new User();
            using(var connection = new SqlConnection(this.connectionString))
            {
                try {
                    connection.Open();
                    Console.WriteLine("[Start] DB Connection");
                    string query = $"SELECT * FROM {this.tableName} WHERE AccessToken = @AccessToken;";
                    Console.WriteLine("[Start] Query Executing");
                    var result = connection.Query<User>(query, new { 
                        AccessToken = token
                    });
                    Console.WriteLine("[End] Query Executing");
                    foreach (User a in result) 
                    {
                        user = a;
                    }
                }
                finally
                {
                    connection.Close();
                    Console.WriteLine("[End] DB Connection");
                }
            }
            return user;
        }

        public String Login(string uID, string password)
        {   
            User user = new User();
            using(var connection = new SqlConnection(this.connectionString))
            {
                try {
                    connection.Open();
                    Console.WriteLine("[Start] DB Connection");
                    string query = $"SELECT * FROM {this.tableName} WHERE Id = @Id;";
                    Console.WriteLine("[Start] Query Executing");
                    var result = connection.Query<User>(query, new { 
                        Id = uID
                    });
                    Console.WriteLine("[End] Query Executing");
                    foreach (User a in result) 
                    {
                        user = a;
                    }
                }
                finally
                {
                    connection.Close();
                    Console.WriteLine("[End] DB Connection");
                }
            }
            String checkHash = _GetHashedTextString(password);
            Console.WriteLine(checkHash);
            Console.WriteLine(user.Password);
            if (checkHash == user.Password)
            {
                return user.CityName;
            }
            return "";
        }
        public string CreateUser(PostUser user)
        {   
            Console.WriteLine("Call CreateUser");
            string token = BuildToken(user.Name, user.CityName);
            using(var connection = new SqlConnection(this.connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("[Start] DB Connection");
                    string query = $"INSERT INTO {this.tableName} VALUES (@Id, @CityName, @Name, @Password, @AccessToken);";
                    
                    Console.WriteLine("---");
                    Console.WriteLine("UserID:" + user.UserID);
                    Console.WriteLine("CityName:" + user.CityName);
                    Console.WriteLine("Name:" + user.Name);
                    Console.WriteLine("Password:" + user.Password);
                    Console.WriteLine("AccessToken:" + token);
                    Console.WriteLine("---");

                    Console.WriteLine("[Start] Query Executing");
                    var result = connection.Execute(query, new {
                        Id = user.UserID,
                        CityName = user.CityName,
                        Name = user.Name,
                        Password = _GetHashedTextString(user.Password),
                        AccessToken = token
                    });
                    Console.WriteLine("[End] Query Executing");
                }
                finally
                {
                    connection.Close();
                    Console.WriteLine("[End] DB Connection");
                }
            }
            return user.CityName;
        }

        // 文字列のハッシュ値（SHA256）を計算・取得する
        protected string _GetHashedTextString(string passwd)
        {
            // パスワードをUTF-8エンコードでバイト配列として取り出す
            byte[] byteValues = Encoding.UTF8.GetBytes(passwd);
 
            // SHA256のハッシュ値を計算する
            SHA256 crypto256 = new SHA256CryptoServiceProvider();
            byte[] hash256Value = crypto256.ComputeHash(byteValues);
         
            // SHA256の計算結果をUTF8で文字列として取り出す
            StringBuilder hashedText = new StringBuilder();
            for (int i = 0; i < hash256Value.Length; i++)
            {
                // 16進の数値を文字列として取り出す
                hashedText.AppendFormat("{0:X2}", hash256Value[i]);
            }       
            return hashedText.ToString();
        }

        private string BuildToken(string name, string cityName)
        {
            string text = File.ReadAllText(@"./Application/Infrastructure/Repositories/Secret/private-key.pem", Encoding.UTF8);
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
                issuer : "tozastation",
                audience : "tozastation.com",
                claims : claims,
                expires : DateTime.UtcNow.AddDays(7),
                signingCredentials : creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}