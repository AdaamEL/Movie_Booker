import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'Ib9oLHvjNyCUI5ySlwkEWs08NUwQgqs5430svG9/', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService, JwtStrategy, JwtAuthGuard],
  controllers: [UserController],
})
export class UserModule {}
