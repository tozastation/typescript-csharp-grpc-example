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
            var connectionString = Program.configuration.GetSection("ConnectionStrings").GetSection("testDatabase").Value;
            var connection = new SqlConnection(connectionString);
            return connection;
        }
    }
}