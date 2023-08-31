import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './controllers/person/person.module';
import { RegistrationModule } from './controllers/registration/registration.module';
import { AutenticationModule } from './controllers/autentication/autentication.module';
// console.log('Secret Key outside Auth Module:', process.env.SECRET_KEY);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI), // Removed the unsupported options
    PersonModule,
    RegistrationModule,
    AutenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
