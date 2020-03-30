Установил TypeOrm:

npm install --save @nestjs/typeorm typeorm mysql

прошел регистрацию в https://remotemysql.com/ и получил mysql config

создал файл и указал конфиги
ormconfig.json
```shell
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
```

Дальнейшие действие можно ознакомится в самом репозиторий
для API тест использовал CURL
https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

Запросы:
```shell
- Create Todo: 
sudo curl -X POST -H "Content-Type: application/json" -d '{"title": "test", "isCompleted": true, "name": "22"}' localhost:3000/api/todos
```
```shell
- Get one Todo:
sudo curl -X GET -H "Content-Type: application/json" localhost:3000/api/todos/1
```
```shell
- Get More Todos:
sudo curl -X GET -H "Content-Type: application/json" localhost:3000/api/todos
```
```shell
- Update Todo:
sudo curl -X PUT -H "Content-Type: application/json" -d '{"title": "Пройти урок по Nestjs", "isCompleted": true}' localhost:3000/api/todos/1
```
```shell
- Delete Todo:
sudo curl -X DELETE -H "Content-Type: application/json" localhost:3000/api/todos/1
```
