import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any): Promise<{ accessToken: string }> {
    const payload = {
      sub: user.providerId,
      email: user.email,
      name: user.name,
    };

    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
