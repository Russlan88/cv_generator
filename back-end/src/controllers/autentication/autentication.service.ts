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

@Injectable()
export class AutenticationService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    private personService: PersonService,
    private jwtService: JwtService,
  ) {}

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // async findByEmail(email: string): Promise<UserDocument> {
  //   const user = await this.userModel.findOne({ email }).exec();
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   return user;
  // }

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
