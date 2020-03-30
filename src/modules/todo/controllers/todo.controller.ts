import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, Res, HttpStatus, UseFilters } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { CreateDto, UpdateDto } from "./dto";
import { TodoService } from "../servies/todo.servie";

@Controller('api/todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    @Get(':id')
    getTodo(
        @Param('id') id: string
    ): Promise<Todo> {
        if (!this.todoService.findIdFail(id)) {
            return this.todoService.findIdFail(id);
        }
        return this.todoService.findOne(id);
    }

    @Get()
    getTodos(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Post()
    createTodo(@Body() todo: CreateDto): Promise<CreateDto> {
        const t = new Todo();
        t.title = todo.title;
        t.isCompleted = todo.isCompleted;
        return this.todoService.create(t);
    }

    @Put(':id')
    updateTodo(
        @Param('id') id: string, 
        @Body() {title, isCompleted = false}: UpdateDto
        ): Promise<UpdateDto | NotFoundException> {
        if (!this.todoService.findIdFail(id)) {
            throw this.todoService.notFound(id)
        }
        const t = new Todo();
        t.id = parseInt(id)
        t.title = title;
        t.isCompleted = isCompleted;
        return this.todoService.update(t);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): Promise<void> {
        if (!this.todoService.findIdFail(id)) {
            throw this.todoService.notFound(id)
        }
        return this.todoService.remove(id);
    }
}