using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using Service;

namespace server.Tests.ImplementTests
{
    public class UserImplTest
    {
        [Fact]
        public Task GetTest()
        {
            var serviceMock = new Mock<IBoardService>();
        }
    }
}
