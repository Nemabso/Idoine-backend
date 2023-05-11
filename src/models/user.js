const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    login: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;