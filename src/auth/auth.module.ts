import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenStrategy } from './strategies /refreshToken.strategies';
import { AccessTokenStrategy } from './strategies /accessToken.strategies';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[JwtModule.register({}),UsersModule,ConfigModule],
  controllers: [AuthController],
  providers: [AuthService,RefreshTokenStrategy,AccessTokenStrategy],
})
export class AuthModule {}
