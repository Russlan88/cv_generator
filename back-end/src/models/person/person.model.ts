import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

@Schema()
class Contatti {
  @Prop()
  telefono: string;

  @Prop()
  email: string;

  @Prop()
  indirizzo: string;
}

const EsperienzaLavorativaSchema = new MongooseSchema({
  _id: { type: Types.ObjectId, default: () => new Types.ObjectId() },
  descrizione: String,
  dataInizio: Date,
  dataFine: Date,
  azienda: String,
});

export type EsperienzaLavorativa = {
  _id: Types.ObjectId;
  descrizione: string;
  dataInizio: Date;
  dataFine: Date;
  azienda: string;
};

@Schema()
export class Person extends Document {
  @Prop()
  nome: string;

  @Prop()
  cognome: string;

  @Prop({ type: Contatti })
  contatti: Contatti;

  @Prop([String])
  competenze: string[];

  @Prop()
  descrizione: string;

  @Prop({ type: [EsperienzaLavorativaSchema] })
  esperienze_lavorative: EsperienzaLavorativa[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
