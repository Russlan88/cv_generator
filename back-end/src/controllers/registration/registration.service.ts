import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Express } from 'express';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schemas/user.schema'; // Assicurati che questa path sia corretta

@Injectable()
export class RegistrationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(file: Express.Multer.File, createUserDto: CreateUserDto) {
    // Hash della password
    const saltRounds = 10;
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    // Crea un nuovo utente e tenta di salvarlo nel database
    try {
      const newUser = new this.userModel(createUserDto);
      await newUser.save();
    } catch (error) {
      // Qui potresti voler gestire specifici errori del database, come gli indirizzi email duplicati
      throw new BadRequestException('Errore durante la registrazione.');
    }

    // Elimina la password dalla risposta
    delete createUserDto.password;

    return {
      message: 'Registrazione completata con successo',
      uploadedFile: file.originalname,
      user: createUserDto,
    };
  }
}
