import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateOAuthLogin(profile: {
    email: string;
    name: string;
    provider: 'google' | 'microsoft';
    providerId: string;
  }): Promise<User> {
    const existingUser = await this.usersService.findByProviderId(
      profile.providerId,
    );

    if (existingUser) return existingUser;

    // 새 사용자 등록
    return await this.usersService.create(profile);
  }

  async login(user: User): Promise<{ accessToken: string }> {
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
