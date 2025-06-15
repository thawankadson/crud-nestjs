import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('login')
  async login(@Body() body: { identifier: string; password: string }) {
    const user = await this.authService.validateUser(
      body.identifier,
      body.password
    );
    if (!user) {
      return { message: 'Credenciais inválidas' };
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string }
  ) {
    const user = await this.usersService.create(
      body.username,
      body.email,
      body.password
    );
    return user;
  }
}
