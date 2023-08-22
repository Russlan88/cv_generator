import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class WorkExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  azienda: string;

  @Column()
  posizione: string;

  @Column({ type: 'date' })
  dataInizio: Date;

  @Column({ type: 'date', nullable: true })
  dataFine: Date | null;

  @Column({ type: 'text', nullable: true })
  descrizione: string | null;

  @ManyToOne(() => Person, (person) => person.esperienze_lavorative)
  person: Person;
}
