import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },

    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        match: /^[6-9]\d{9}$/,
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
        select: false,
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
},
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

export default User;