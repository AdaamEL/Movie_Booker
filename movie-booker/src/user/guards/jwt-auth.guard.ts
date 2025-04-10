import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
      this.logger.error('No token provided');
      return false;
    }

    const secretKey = this.configService.get<string>('JWT_SECRET');

    if (!secretKey) {
      this.logger.error('JWT secret key is not defined');
      return false;
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      this.logger.log('Token verified:', decoded);
      request.user = decoded;
      return true;
    } catch (error) {
      this.logger.error('Token verification failed', error);
      return false;
    }
  }
}
