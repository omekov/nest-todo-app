import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { CreateDto, UpdateDto } from "./dto";

@Controller('api/todos')
export class TodoController {
    @Get(':id')
    getTodo(@Param('id') id: string) : string {
        return `Todo id: ${id}`;
    }

    @Get()
    getTodos(): string {
        return "More todos";
    }

    @Post()
    createTodo(@Body() todo: CreateDto): CreateDto {
        return todo;
    }

    @Put(':id')
    updateTodo(
        @Param('id') id: string, 
        @Body() todo: UpdateDto
        ): UpdateDto {
        return todo;
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): string {
        return `Todo id: ${id}`;
    }
}