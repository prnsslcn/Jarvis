import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
    const user = req.user as any; // GoogleStrategy에서 전달된 user 객체

    // JWT 발급
    const { accessToken } = await this.authService.login(user);

    // 클라이언트로 전달 - 여기선 쿼리로 전달 or redirect + 쿠키 등 가능
    res.redirect(`http://localhost:5173/auth/callback?token=${accessToken}`);
  }
}
