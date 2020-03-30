import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "../entities/todo.entity";
import { Repository } from "typeorm";
import { UpdateDto } from "../controllers/dto";
import { NotFoundException, HttpException, HttpStatus } from "@nestjs/common";

export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly TodosRepository: Repository<Todo>,
    ){}
    findAll(): Promise<Todo[]> {
        return this.TodosRepository.find();
    }
    findOne(id: string): Promise<Todo> {
        return this.TodosRepository.findOne(id);
    }
    create(todo: Todo): Promise<Todo> {
        return this.TodosRepository.save(todo);
    }
    update(todo: UpdateDto): Promise<Todo> {
        return this.TodosRepository.save(todo);
    }
    async remove(id: string): Promise<void> {
        await this.TodosRepository.delete(id);
    }
    notFound(id: string): NotFoundException {
        throw new HttpException(`There is no todos "${id}"`, HttpStatus.NOT_FOUND)
    }
}