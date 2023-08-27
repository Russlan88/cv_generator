import {
  Entity,
  ObjectIdColumn,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { WorkExperience } from './workExperience.entity';
import { ObjectId } from 'mongodb';

@Entity()
export class Person {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  nome: string;

  @Column()
  password: string;

  @Column()
  cognome: string;

  @Column('text', { array: true })
  competenze: string[];

  @Column()
  descrizione: string;

  @Column('simple-json')
  contatti: {
    telefono: string;
    email: string;
    indirizzo: string;
  };

  @OneToMany(() => WorkExperience, (workExperience) => workExperience.person)
  esperienze_lavorative: WorkExperience[];
}
