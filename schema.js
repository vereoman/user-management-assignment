const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
    profile: {
        type: profileSchema,
        required: true,
    },
    lastLogin: {
        type: Date,
    },
});

module.exports = mongoose.model('User', userSchema);