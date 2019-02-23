namespace WeatherApi.Domain.Service.Interface
{
    public interface IAuthService
    {
        string PublishJwt(string name, string cityName);
        string PasswordHashed(string plainText);
    }
}
