using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using WeatherApi.Application.Domain.Service.Interface;
using Proto.User;
using WeatherApi.Application.Implements;

namespace server.Tests.ImplementTests
{
    public class UserImplTest
    {
        [Fact]
        public void LoginTest()
        {
            string userId = "tozastation";
            string password = "password";
            string expected = "token";

            var serviceMock = new Mock<IUserService>();
            serviceMock.Setup(x => x.LoginUser(userId, password))
                .Returns(expected);

            var implement = new UserImpl(serviceMock.Object);
           
            var result = implement.Login(new LoginRequest(), null);

            Assert.IsType<LoginResponse>(result);
        }
    }
}
