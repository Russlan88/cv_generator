import { Schema, Document } from 'mongoose';

export type PersonDocument = Person & Document;

export class WorkExperience {
  _id?: string;
  companyName: string;
  role: string;
  startDate: Date;
  endDate: Date;
}

export class Contatti {
  telefono: string;
  email: string;
  indirizzo: string;
}

export class Person {
  _id?: string;
  name: string;
  surname: string;
  age: number;
  descrizione: string;
  contatti: Contatti[];
  competenze: string[];
  esperienze_lavorative: WorkExperience[];
}

export const PersonSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  descrizione: { type: String, required: false },
  contatti: [
    {
      telefono: { type: String, required: true },
      email: { type: String, required: true },
      indirizzo: { type: String, required: true },
    },
  ],
  competenze: [{ type: String }],
  esperienze_lavorative: [
    {
      _id: { type: Schema.Types.ObjectId, auto: true },
      companyName: { type: String, required: true },
      role: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
    },
  ],
});
