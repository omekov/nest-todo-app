Установил TypeOrm:

npm install --save @nestjs/typeorm typeorm mysql

прошел регистрацю в https://remotemysql.com/ и получил mysql config

создал файл и указал конфиги
ormconfig.json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "test",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

Дальнейшие действие можно ознакомится в самом репозиторий
для API тест использовал CURL
https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

Запросы:
- Create Todo: 
sudo curl -X POST -H "Content-Type: application/json" -d '{"title": "test", "isCompleted": true, "name": "test"}' localhost:3000/api/todos

- Get one Todo:
sudo curl -X GET -H "Content-Type: application/json" localhost:3000/api/todos/1

- Get More Todos:
sudo curl -X GET -H "Content-Type: application/json" localhost:3000/api/todos

- Update Todo:
sudo curl -X PUT -H "Content-Type: application/json" localhost:3000/api/todos/1

- Delete Todo:
sudo curl -X DELETE -H "Content-Type: application/json" localhost:3000/api/todos/1
