import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PersonService } from '../person/person.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserModel } from '../../models/user/user.model';
import { LoginUserDto } from '../../dto/login-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AutenticationService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    private personService: PersonService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // Metodo per generare un JWT una volta che l'utente è stato validato
  async generateJwt(user: UserDocument): Promise<string> {
    const payload = { username: user.email, sub: user._id };
    return this.jwtService.sign(payload);
  }

  // Metodo per validare un utente in base all'email e alla password
  async validateByEmailAndPassword(dto: LoginUserDto): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email: dto.email }).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }
}
