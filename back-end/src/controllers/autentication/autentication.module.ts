import { Module } from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { AutenticationController } from './autentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../models/user/user.model';
import { PersonModule } from '../person/person.module';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule], // Aggiungi questo
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('SECRET_KEY');
        return {
          secret,
          signOptions: { expiresIn: '60m' },
        };
      },
    }),
    PassportModule,
    PersonModule,
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [AutenticationController],
  providers: [AutenticationService, JwtStrategy],
  exports: [AutenticationService],
})
export class AutenticationModule {}
