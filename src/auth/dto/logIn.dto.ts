/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginDto {

    @IsNotEmpty()
    @IsEmail({}, {message: 'Please enter  a valid email'})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

}