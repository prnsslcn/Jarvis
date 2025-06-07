import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Req() req: Request) {
    return req.user; // JWT로부터 디코딩된 사용자 정보
  }

  // 1️⃣ 로그인 시작 - Google OAuth 로그인 페이지로 리디렉션
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<void> {
    // Passport가 알아서 처리함 (redirect)
  }

  // 2️⃣ 리디렉션 콜백 - 로그인 성공 시 사용자 정보 수신
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const user = req.user as User;

    const { accessToken } = await this.authService.login(user);

    res.redirect(`http://localhost:5173/auth/callback?token=${accessToken}`);
  }
}
