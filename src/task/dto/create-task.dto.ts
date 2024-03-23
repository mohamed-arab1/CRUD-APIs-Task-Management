/* eslint-disable prettier/prettier */

import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "../../auth/Schemas/user.schema";

export class CreateTaskDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsEmpty()
    readonly user: User
  }