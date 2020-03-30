import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from '../servies/todo.servie';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('todos')
@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get one todo',
    type: Todo,
  })
  async getTodo(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      this.todoService.notFound(id);
    }
    return this.todoService.findOne(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all todos',
    type: [Todo],
  })
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'create todo',
    type: Todo,
  })
  @ApiBody({ type: CreateDto })
  createTodo(@Body() todo: CreateDto): Promise<CreateDto> {
    const t = new Todo();
    t.title = todo.title;
    t.isCompleted = todo.isCompleted;
    return this.todoService.create(t);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'update todo',
    type: Todo,
  })
  @ApiBody({ type: UpdateDto })
  async updateTodo(
    @Param('id') id: string,
    @Body() { title, isCompleted = false }: UpdateDto,
  ): Promise<UpdateDto | NotFoundException> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      this.todoService.notFound(id);
    }
    const t = new Todo();
    t.id = parseInt(id);
    t.title = title;
    t.isCompleted = isCompleted;
    return this.todoService.update(t);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'delete todo',
  })
  async deleteTodo(@Param('id') id: string): Promise<void> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      this.todoService.notFound(id);
    }
    return this.todoService.remove(id);
  }
}
