import { Schema, Document } from 'mongoose';

export interface User {
  username: string;
  password: string;
  email: string;
}

export interface UserDocument extends User, Document {}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
