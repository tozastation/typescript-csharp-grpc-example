FROM microsoft/mssql-server-linux:latest

COPY  ./SQL/init.sql mssql-server:/tmp/init.sql

RUN mssql-server /opt/mssql-tools/bin/sqlcmd -i /tmp/init.sql -U sa -P Test@1234
