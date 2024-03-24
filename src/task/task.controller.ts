/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('api/tasks')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Get()
    async  getTasks(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Post()
    async createTask(
        @Body()
        task: CreateTaskDto,
    ): Promise<Task>{
        return this.taskService.create(task);
    }

    @Put( ':id' )
    async updateTask(
        @Param('id')
        id: string,
        @Body()
        task
    ) : Promise<Task>{
        return  this.taskService.updateById(id, task)
    }

    @Delete( ':id' )
    async deleteTask(
        @Param('id')
        id: string
    ) {
        return this.taskService.deleteById(id)
    }
}
