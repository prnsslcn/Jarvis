import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'; // ✅ 추가

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, // ✅ 등록
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
