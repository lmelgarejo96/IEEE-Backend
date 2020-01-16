// Mongo DB
import { Schema, model, Document } from 'mongoose';

import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    Correo: string,
    Contraseña: string,
    Pregunta: string,
    Respuesta: string,
    Estado?: boolean,
    encryptPassword( password: string ): Promise<string>,
    validatePassword( password: string ): Promise<boolean>
}

const userSchema = new Schema({
    Correo: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    Contraseña: {
        type: String,
        required: true,
        min: 4
    },
    Pregunta: {
        type: String,
        required: true,
        lowercase: true,
        min: 4,
    },
    Respuesta: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    Estado: {
        type: Boolean,
        required: false,
    }
});

userSchema.methods.encryptPassword = async ( password: string ): Promise<String> => {
    const SALT = await bcrypt.genSalt(10);
    return bcrypt.hash(password, SALT);
}

userSchema.methods.validatePassword = async function ( password: string ): Promise<boolean> {
    return await bcrypt.compare(password, this.Contraseña);
}

export default model<IUser>('User', userSchema);

// SQL