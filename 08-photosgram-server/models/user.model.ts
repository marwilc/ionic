import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is necessary'],
    },
    avatar: {
        type: String,
        default: 'av-1.png',
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The mail is necessary'],
    },
    password: {
        type: String,
        required: [true, 'The password is necessary'],
    },
});

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export const User = model<IUser>('User', userSchema);
