import { Schema, Document } from 'mongoose';

export type UserDocument = User & Document;

export class User {
  username: string;
  password: string; // Nota: Utilizza sempre la crittografia prima di salvare le password!
  email: string;
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // Ricorda di utilizzare la crittografia prima di salvare le password!
  email: { type: String, required: true },
});
