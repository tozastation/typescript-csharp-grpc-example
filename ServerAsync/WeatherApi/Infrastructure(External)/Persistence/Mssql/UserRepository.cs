using System;
using System.Data.SqlClient;
using WeatherApi.Domain.Repository;
using Dapper;
using System.Threading.Tasks;
using WeatherApi.Infrastructure.Persistence.Model.DB;

namespace WeatherApi.Application.Infrastructure.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly SqlConnection connection;

        public UserRepository(SqlConnection _connection)
        {
            connection = _connection;
        }

        private string tableName = "[Weather].[dbo].[Users]";

        public async Task<User> FindUserByUserTokenAsync(string token)
        {
            connection.Open();
            User user = new User();
            using(var transaction = connection.BeginTransaction())
            {
                try 
                {
                    string query = $"SELECT * FROM {this.tableName} WHERE AccessToken = @AccessToken;";
                    var result = await connection.QueryAsync<User>(query, new
                    {
                        AccessToken = token
                    });
                    foreach (User a in result) 
                    {
                        user = a;
                    }
                    transaction.Commit();
                }
                catch
                {
                    transaction.Rollback();
                }
                finally
                {
                    connection.Close();
                }
            }
            return user;
        }

        public async Task<string> LoginAsync(string uID, string password)
        {   
            User user = new User();
            using(var transaction = connection.BeginTransaction())
            {
                try 
                {
                    connection.Open();
                    string query = $"SELECT * FROM {this.tableName} WHERE Id = @Id;";
                    var result = connection.QueryAsync<User>(query, new { 
                        Id = uID
                    });
                    foreach (User a in await result) 
                    {
                        user = a;
                    }
                    transaction.Commit();
                }
                catch
                {
                    transaction.Rollback();
                }
                finally
                {
                    connection.Close();
                }
            }
            if (password == user.Password)
            {
                return user.CityName;
            }
            return "";
        }

        public async Task<string> CreateUserAsync(User user)
        {
            using (var transaction = connection.BeginTransaction())
            {
                try
                {
                    connection.Open();
                    string query = $"INSERT INTO {this.tableName} VALUES (@Id, @CityName, @Name, @Password, @AccessToken);";
                    var result = await connection.ExecuteAsync(query, user);
                    if (result == 1)
                    {
                        return user.CityName;
                    }
                    transaction.Commit();
                }
                catch
                {
                    transaction.Rollback();
                }
                finally
                {
                    connection.Close();
                }
            }
            return null;
        }
    }
}