import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('auth')
export class LogoutController {
  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response): void {
    // Se stai usando sessioni:
    req.session.destroy((err) => {
      if (err) {
        // gestisci l'errore
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Unable to logout');
        return;
      }

      // Pulisci eventuali cookie
      res.clearCookie('SESSIONID'); // sostituisci con il nome del tuo cookie di sessione

      res.status(HttpStatus.OK).send('Logged out');
    });

    // Se stai usando token JWT:
    // L'invalidazione del token JWT può essere gestita lato client
    // semplicemente rimuovendo il token dallo storage locale/cookie.
    // Tuttavia, se vuoi invalidare il token lato server, potresti dover implementare
    // una blacklist di token o utilizzare token JWT con una breve durata di validità
    // e utilizzare un meccanismo di refresh token.
  }
}
