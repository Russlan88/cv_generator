import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { LoginUserDto } from '../../dto/login-user.dto';

@Controller('auth')
export class AutenticationController {
  constructor(private readonly autenticationService: AutenticationService) {
    console.log('Secret Key:', process.env.SECRET_KEY);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      // Validare l'utente
      const user = await this.autenticationService.validateByEmailAndPassword(
        loginUserDto,
      );

      // Generare un JWT
      const token = await this.autenticationService.generateJwt(user);

      return {
        message: 'Login successful',
        token,
      };
    } catch (error) {
      // Gestire gli errori (ad esempio, loggare l'errore, inviare una risposta appropriata, ecc.)
      throw error;
    }
  }
}
