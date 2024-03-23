/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/logIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(
        @Body()
        signUpDto: SignUpDto
    ): Promise<{token: string}>{
        return this.authService.signUp(signUpDto);
    }
    @Post('/login')
    logIn(
        @Body()
        loginDto: LoginDto
    ): Promise<{token: string}>{
        return this.authService.login(loginDto);
    }
}
