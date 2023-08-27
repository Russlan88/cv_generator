import { Module } from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { AutenticationController } from './autentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../models/user/user.model';
import { PersonModule } from '../person/person.module';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET',
      signOptions: { expiresIn: '60m' },
    }),
    PersonModule,
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [AutenticationController],
  providers: [AutenticationService],
  exports: [AutenticationService],
})
export class AutenticationModule {}
