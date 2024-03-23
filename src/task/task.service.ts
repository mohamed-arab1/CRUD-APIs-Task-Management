/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import * as mongoose from 'mongoose';
import { User } from '../auth/Schemas/user.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel: mongoose.Model<Task>
    ){}

    async findAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find();
        return tasks;
    }

    async create(task: Task, user: User): Promise<Task> {
        const data = Object.assign(task, {user: user._id})
        const res = await this.taskModel.create(data);
        return res;
    }

    async updateById(id: string, task: Task ) : Promise<Task> {
        return   this.taskModel.findByIdAndUpdate({_id: id}, task, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id: string): Promise<Task> {
        return await this.taskModel.findByIdAndDelete({_id: id})
    }
}
