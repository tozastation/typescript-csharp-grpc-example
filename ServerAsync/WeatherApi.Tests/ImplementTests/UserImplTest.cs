using Xunit;
using Moq;
using WeatherApi.Application.Domain.Service.Interface;
using WeatherApi.Application.Infrastructure.Repositories.Interfaces;
using Proto.User;
using WeatherApi.Application.Implements;
using Grpc.Core.Testing;
using System;
using Grpc.Core;
using System.Threading;
using Grpc.Core.Utils;

namespace server.Tests.ImplementTests
{
    public class UserImplTest
    {
        private Mock<IUserService> userRepoMoq;

        //private String actualToken = "tozastation";

        private String actualCityName = "Hakodate";

        public UserImplTest()
        {
            userRepoMoq = new Mock<IUserService>();

            userRepoMoq.Setup(x => x.CreateUser(It.IsAny<PostUser>()))
            .Returns(actualCityName);

            userRepoMoq.Setup(x => x.LoginUser(It.IsAny<String>(), It.IsAny<String>()))
            .Returns(actualCityName);
        }

        [Fact]
        public void LoginTest()
        { 

            var implement = new UserImpl(userRepoMoq.Object);

            var fakeServerCallContext = TestServerCallContext.Create(
                "fooMethod",
                null, 
                DateTime.UtcNow.AddHours(1), 
                new Metadata(), 
                CancellationToken.None, 
                "127.0.0.1", 
                null, 
                null, 
                (metadata) => TaskUtils.CompletedTask, 
                () => new WriteOptions(),
                 (writeOptions) => { }
                );

            var result = implement.Login(new LoginRequest(), fakeServerCallContext);

            //Assert.IsType<LoginResponse>(result);
            Assert.Equal(result.Result.CityName, actualCityName);
        }
    }
}
