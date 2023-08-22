import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegistrationService } from './registration.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { multerConfig } from '../../config/multer.config';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  async register(@UploadedFile() file, @Body() createUserDto: CreateUserDto) {
    return this.registrationService.register(file, createUserDto);
  }
}
