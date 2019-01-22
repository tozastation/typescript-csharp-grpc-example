using System;

namespace Model.Local
{
    public class User
    {
        public int ID { get; set; }

        public string UserID { get; set; }
        public string CityName { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string AccessToken { get; set; }
    }
}