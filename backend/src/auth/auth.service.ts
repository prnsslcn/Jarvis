import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
  email: string;
  name: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateJwt(user: JwtPayload): { accessToken: string } {
    const payload: JwtPayload = { email: user.email, name: user.name };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
