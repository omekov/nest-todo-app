import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./entities/todo.entity";
import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./servies/todo.servie";
import { APP_FILTER } from '@nestjs/core';
@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
    providers: [ TodoService ],
})
export class TodoModule {}
