using System.Data.SqlClient;

namespace WeatherApi.Interfaces.Handler
{
    public class DBHandler
    {
        private readonly string connectionString = @"Data Source=db;Initial Catalog=Weather;Connect Timeout=60;Persist Security Info=True;User ID=sa;Password=Test@1234";

        public SqlConnection GetConnection()
        {
            return new SqlConnection(connectionString);
        }
    }
}
