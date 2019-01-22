using System.Configuration;
using System.Data.SqlClient;
using System.Data.Common;
using Application;

namespace Infrastructure
{
    public class SqlHandler
    {
        public SqlConnection GetConnection()
        {
            var connectionString = "Data Source=127.0.0.1:1433;Initial Catalog=Weather;User ID=SA;Password=Test@1234";
            //var connectionString = Program.configuration.GetSection("ConnectionStrings").GetSection("testDatabase").Value;
            var connection = new SqlConnection(connectionString);
            return connection;
        }
    }
}