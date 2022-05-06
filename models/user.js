import mongoose from 'mongoose';
import { compare } from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { versionKey: false }
);

userSchema.method.verifyPassword = function (password) {
    compare(password, this.password, function (err, result) {
        if (err) {
            console.log("verifyPassword error", err)
        }
        return result
    });
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User