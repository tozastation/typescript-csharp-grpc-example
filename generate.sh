protoc -I ./proto --csharp_out=./server/Application/Domain/Model/Proto --grpc_out=./server/Application/Domain/Model/Proto --plugin=protoc-gen-grpc=/usr/local/bin/grpc_csharp_plugin ./proto/user.proto

protoc -I ./proto --csharp_out=./server/Application/Domain/Model/Proto --grpc_out=./server/Application/Domain/Model/Proto --plugin=protoc-gen-grpc=/usr/local/bin/grpc_csharp_plugin ./proto/weather.proto
