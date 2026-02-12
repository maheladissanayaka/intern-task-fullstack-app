import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Add this
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService 
  ) {
    super({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false,
  // The '!' tells TypeScript that this value will definitely exist
  secretOrKey: configService.get<string>('JWT_SECRET')!, 
    });
  }

  async validate(payload: any) {
    // payload.sub is the ID. Make sure your AuthService uses { sub: user.id }
    const user = await this.usersService.findById(payload.sub);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    
    return { 
      id: user.id, 
      email: user.email, 
      firstName: user.firstName, 
      lastName: user.lastName 
    };
  }
}