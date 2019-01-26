# gRPC-Training
Web, APIサーバをgRPCで実装するサンプルになります．  
テーマはお天気です．  
※ APIサーバとDBコンテナの疎通が上手くいかないため，サインアップ・サインインが使い物になりません．  
助けてください．

## Tech
### Web Front
- React(Typescript)
- Flux
#### Dependency (package.json)
|Name|Github|
|:-----------|:------------|
|google-protobuf|https://github.com/protocolbuffers/protobuf|
|grpc|https://github.com/grpc/grpc/tree/master/tools|
|grpc-tools|https://github.com/grpc/grpc/tree/master/tools|
|grpc-web|https://github.com/improbable-eng/grpc-web|
|grpc_tools_node_protoc_ts|https://github.com/agreatfool/grpc_tools_node_protoc_ts|
|jss|https://github.com/cssinjs/jss|
|react-redux|https://github.com/reduxjs/react-redux|
|redux-devtools-extension|https://github.com/zalmoxisus/redux-devtools-extension|
|redux-logger|https://github.com/LogRocket/redux-logger|
|redux-saga|https://github.com/redux-saga/redux-saga|
|typesafe-actions|https://github.com/piotrwitek/typesafe-actions|
|typescript|https://github.com/Microsoft/TypeScript|

### Backend
- C#
- Clean Archtecture
#### Dependency (server.csproj)
|Name|Github|
|:-----------|:------------|
|Dapper|https://github.com/StackExchange/Dapper|
|Google.Cloud.Language.V1|https://github.com/googleapis/google-cloud-dotnet/tree/master/apis/Google.Cloud.Language.V1|
|Google.Protobuf|https://github.com/protocolbuffers/protobuf|
|Grpc|https://github.com/grpc/|
|Grpc.Core|https://github.com/grpc/grpc/tree/master/src/core|
|Grpc.Tools|https://github.com/grpc/grpc/tree/master/tools|
|Microsoft.AspNetCore.App|https://github.com/aspnet/AspNetCore|
|Microsoft.AspNetCore.Razor.Design|https://github.com/aspnet/AspNetCore|

### Other
- macOS Mojave 10.14.1 
### Dependency
| Name | Github |
|:-----------|:------------|
|protobuf|https://github.com/google/proto-lens|
|Envoy|https://github.com/envoyproxy/envoy|
|SQL Server|https://github.com/Microsoft/sql-server-samples|

# Setup
### Clone
- `git clone git@github.com:tozastation/gRPC-Training.git`
### Activate API, Proxy, SQL Server 
- `docker-compose build; docker-compose up -d` (on Root Directory)
### Activate Web Server
- `yarn start` (on clienct/weather-app)

# Usage
特にありません．

# Licence
This software is released under the MIT License, see LICENSE.

# Authors
- @tozastation
- @YTakahashii

# Reference（参考資料）
## gRPC
- [gRPC はじめました。](http://mxproj.blogspot.com/2018/01/grpc.html)
- [Official-Github](https://github.com/grpc/grpc/tree/master/src/csharp)
- [Official](https://grpc.io/docs/tutorials/basic/csharp.html#implementing-routeguide)
- [gRPC C#環境を作成する](https://qiita.com/muroon/items/4e12dde47b9e8b1e94d3)
- [C# で gRPC を使ってみた、ついでに Stream でファイル転送](https://www.fast-system.jp/c-%E3%81%A7-grpc-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%80%81%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB-stream-%E3%81%A7%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E8%BB%A2%E9%80%81/)