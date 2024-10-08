import mongoose, { Schema, Document } from "mongoose";


export interface Iimage {
    id: string;   
    url: string;
    }

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

}

const userSchema = new Schema({ 
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
    });

const User = mongoose.model<IUser>('User', userSchema);
export { User };
