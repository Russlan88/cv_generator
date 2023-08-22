import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonService } from './person.service'; // Assicurati che il percorso sia corretto
import { PersonController } from './person.controller'; // Assicurati che il percorso sia corretto
import { Person, PersonSchema } from '../../schemas/person.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
