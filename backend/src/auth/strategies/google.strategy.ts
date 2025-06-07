import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Strategy,
  StrategyOptions,
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID') ?? '',
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET') ?? '',
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL') ?? '',
      scope: ['email', 'profile'],
    } as StrategyOptions); // 타입 오류 방지
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): void {
    const user = {
      email: profile?.emails?.[0]?.value ?? '',
      name: `${profile?.name?.givenName ?? ''} ${profile?.name?.familyName ?? ''}`,
      provider: profile?.provider ?? 'google',
      providerId: profile?.id ?? '',
    };

    done(null, user);
  }
}
