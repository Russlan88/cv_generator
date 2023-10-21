import { Module } from '@nestjs/common';
import { LogoutController } from './logout.controller';

@Module({
  controllers: [LogoutController],
  providers: [], // Se hai dei servizi da includere
})
export class LogOutModule {}
