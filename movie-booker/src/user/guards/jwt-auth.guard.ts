import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
      return false;
    }

    try {
      const secretKey = 'Ib9oLHvjNyCUI5ySlwkEWs08NUwQgqs5430svG9/s'; 
      const decoded = jwt.verify(token, secretKey);
      request.user = decoded; 
      return true;
    } catch {
      return false;
    }
  }
}
