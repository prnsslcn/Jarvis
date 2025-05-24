import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService, JwtPayload } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth(): void {
    return;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request) {
    const user = req.user as JwtPayload; // ✅ 타입 단언
    const jwt = this.authService.generateJwt(user); // ⛔ 오류 해결
    return {
      message: 'Google login successful',
      token: jwt.accessToken,
      user: user,
    };
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req: Request) {
    return {
      message: 'Profile retrieved successfully',
      user: req.user, // req.user는 JwtStrategy에서 설정한 사용자 정보
    };
  }
}
