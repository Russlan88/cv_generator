import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { AutenticationService } from '../autentication/autentication.service';
import { UserDocument } from '../../models/user/user.model';
import { LoginUserDto } from '../../dto/login-user.dto';

@Controller('login')
export class AutenticationController {
  constructor(private readonly autenticationService: AutenticationService) {}

  @Post('validateUser')
  async validateUserByEmailAndPassword(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<UserDocument> {
    try {
      const user = await this.autenticationService.validateByEmailAndPassword(
        loginUserDto,
      );
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('User not found');
      } else if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException('Invalid password');
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}
