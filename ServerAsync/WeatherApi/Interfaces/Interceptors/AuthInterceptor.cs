using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Core.Interceptors;
using Microsoft.IdentityModel.Tokens;
using Grpc.Core.Logging;

namespace WeatherApi.Application.Interceptors
{
    public class AuthInterceptor: Interceptor
    {
        public override Task<TResponse> ClientStreamingServerHandler<TRequest, TResponse>
        (
            IAsyncStreamReader<TRequest> requestStream,
            ServerCallContext context,
            ClientStreamingServerMethod<TRequest, TResponse> continuation
        )
        {
            return base.ClientStreamingServerHandler(requestStream, context, continuation);
        }

        //public override Task DuplexStreamingServerHandler<TRequest, TResponse>
        //(
        //    IAsyncStreamReader<TRequest> requestStream,
        //    IServerStreamWriter<TResponse> responseStream,
        //    ServerCallContext context,
        //    DuplexStreamingServerMethod<TRequest, TResponse> continuation,
        //)
        //{
        //    return base.DuplexStreamingServerHandler(requestStream, responseStream, context, continuation);
        //}

        public override Task ServerStreamingServerHandler<TRequest, TResponse>
        (
            TRequest request,
            IServerStreamWriter<TResponse> responseStream,
            ServerCallContext context,
            ServerStreamingServerMethod<TRequest, TResponse> continuation
        )
        {
            return base.ServerStreamingServerHandler(request, responseStream, context, continuation);
        }

        public override Task<TResponse> UnaryServerHandler<TRequest, TResponse>
        (
            TRequest request,
            ServerCallContext context,
            UnaryServerMethod<TRequest, TResponse> continuation
        )
        {
            GrpcEnvironment.Logger.Info("[START] UnaryServerHandler is Called from Client");
            var headers = context.RequestHeaders;
            String accessToken = GetTokenFromMetadata(headers);
            bool result = false;
            if (accessToken != "")
            {
                result = ValidateToken(accessToken);
            }
            else
            {
                GrpcEnvironment.Logger.Error("[EXECUTE FAILURE!] AccessToken is Null");
                context.Status = new Status(StatusCode.Aborted, "aborted by interceptor.");
            }
            return base.UnaryServerHandler(request, context, continuation);
        }

        private Boolean ValidateToken(String accessToken)
        {
            GrpcEnvironment.Logger.Info("[START] ValidateToken is Called from AuthInterceptor");
            string text = File.ReadAllText(@"./Application/Infrastructure/Repositories/Secret/private-key.pem", Encoding.UTF8);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(text));

            var validationParameter = new TokenValidationParameters
            {
                RequireSignedTokens = true,
                ValidAudience = "tozastation.com",
                ValidateAudience = true,
                ValidIssuer = "tozastation",
                ValidateIssuer = true,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = key
            };

            ClaimsPrincipal result = null;
            try
            {
                var handler = new JwtSecurityTokenHandler();
                result = handler.ValidateToken(accessToken, validationParameter, out var token);
            }
            catch (SecurityTokenException ex)
            {
                GrpcEnvironment.Logger.Error("[EXECUTE FAILURE!] " + ex.Message);
                GrpcEnvironment.Logger.Error("[Cause by] " + ex.StackTrace);
                return false;
            }
            GrpcEnvironment.Logger.Info("[END] ValidateToken is Called from AuthInterceptor");
            return true;
        }

        private String GetTokenFromMetadata(Metadata m)
        {
            GrpcEnvironment.Logger.Info("[START] GetTokenFromMetadata is Called from AuthInterceptor");
            var token = "";
            foreach (Metadata.Entry a in m)
            {
                if (a.Key == "Authorization!")
                {
                    token = a.Value;
                    break;
                }
            }
            GrpcEnvironment.Logger.Info("[END] GetTokenFromMetadata is Called from AuthInterceptor");
            return token;
        }
    }



}
