import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService implements OnModuleInit{
    private users: User[] = [];

    async onModuleInit() {
        const hashedPassword = await bcrypt.hash('admin', 10);
        this.users.push({
            id: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: hashedPassword,
    });
}
async findByIdentifier(identifier: string) {
    return this.users.find(
      user => user.username === identifier || user.email === identifier
    );
  }

    async create(username: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            id: this.users.length + 1,
            username,
            email,
            password: hashedPassword,
        };
        this.users.push(user);
        return user;
    }
}
