import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  private users: User[] = []; // 임시 메모리 저장소

  async findByProviderId(providerId: string): Promise<User | undefined> {
    return this.users.find((user) => user.providerId === providerId);
  }

  async create(userData: Omit<User, 'id'>): Promise<User> {
    const newUser = { id: randomUUID(), ...userData };
    this.users.push(newUser);
    return newUser;
  }
}
