import { compareSync } from 'bcrypt';
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

userSchema.method(
    'passwordCompare',
    function (password: string = ''): boolean {
        if (compareSync(password, this.password)) {
            return true;
        } else {
            return false;
        }
    }
);
export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
    passwordCompare(password: string): boolean;
}

export const User = model<IUser>('User', userSchema);
