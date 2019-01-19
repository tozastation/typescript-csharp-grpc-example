protoc -I ./Proto --csharp_out=./Server/Application/Domain/Model/Proto --grpc_out=./Server/Application/Domain/Model/Proto --plugin=protoc-gen-grpc=/usr/local/bin/grpc_csharp_plugin ./Proto/user.proto

protoc -I ./Proto --csharp_out=./Server/Application/Domain/Model/Proto --grpc_out=./Server/Application/Domain/Model/Proto --plugin=protoc-gen-grpc=/usr/local/bin/grpc_csharp_plugin ./Proto/weather.proto
protoc -I ./Proto --csharp_out=./Server/Application/Domain/Model/Proto --grpc_out=./Server/Application/Domain/Model/Proto --plugin=protoc-gen-grpc=/usr/local/bin/grpc_csharp_plugin ./Proto/ping.proto

# protoc -I ./proto \\
# --go_out=./TestConnect \\
# --plugins=/Users/tozastation/go/bin/protoc-gen-go

# protoc --proto_path=./Proto --go_out=./TestConnect --plugin=/Users/tozastation/go/bin/protoc-gen-go ./Proto/user.proto 
# protoc --proto_path=./Proto --go_out=./TestConnect --plugin=/Users/tozastation/go/bin/protoc-gen-go ./Proto/weather.proto 
