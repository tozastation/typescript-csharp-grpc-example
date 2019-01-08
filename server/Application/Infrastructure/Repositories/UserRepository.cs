using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data.Common;
using System.Threading.Tasks;
using Application;
using Remote;
namespace Repositories
{
    public class UserRepository:IUserRepository
    {

        public List<User> FindUserByUserToken(string token)
        {   
            using(var sqlConnection = Application.Program.sqlHandler.GetConnection())
            {
                var userList = new List<User>();
                sqlConnection.Open();
                var command = new SqlCommand();
                command.Connection = sqlConnection;
                command.CommandText = @"SELECT count(*) FROM T_USER";
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read() == true)
                    {
                        userList.Add(new User()
                        {
                            LoginId = reader["LOGIN_ID"] as string,
                            Name = reader["Name"] as string,
                            Password = reader["PASSWORD"] as string,
                            CityName = reader["CITY_NAME"] as string
                        });
                    }
                }
                return userList;
            }
        }

        public string CreateUser(User user)
        {   
            using(var sqlConnection = Application.Program.sqlHandler.GetConnection())
            {
                var userList = new List<User>();
                sqlConnection.Open();
                var command = new SqlCommand();
                command.Connection = sqlConnection;
                command.CommandText = @"SELECT count(*) FROM T_USER";
                command.ExecuteNonQuery();
                string AccessToken = "";
                return AccessToken;
            }
        }
    }
}