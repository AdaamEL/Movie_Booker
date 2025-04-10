import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Ib9oLHvjNyCUI5ySlwkEWs08NUwQgqs5430svG9/',
    });
  }

  async validate(payload: any) {
    return { userId: payload.email, email: payload.email };
  }
}
