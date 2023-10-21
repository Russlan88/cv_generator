import {
  Module,
  OnModuleInit,
  MiddlewareConsumer,
  NestModule,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './controllers/person/person.module';
import { RegistrationModule } from './controllers/registration/registration.module';
import { AutenticationModule } from './controllers/autentication/autentication.module';
import { LogOutModule } from './controllers/logout/logout.module';
import session from 'express-session';
import { LogoutController } from './controllers/logout/logout.controller';
// console.log('Secret Key outside Auth Module:', process.env.SECRET_KEY);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI), // Removed the unsupported options
    PersonModule,
    RegistrationModule,
    AutenticationModule,
    LogOutModule,
  ],
  controllers: [AppController, LogoutController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          // Configurazioni della sessione
          secret: 'my-secret',
          resave: false,
          saveUninitialized: false,
        }),
      )
      .forRoutes('*'); // applica il middleware a tutte le rotte
  }
}
