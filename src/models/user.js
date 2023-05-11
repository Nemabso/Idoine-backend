const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateJwt = async () => {
    return jwt.sign({ _id: this._id }, 'IdoineFormation2023!', { expiresIn: "3600s" })
}

userSchema.statics.findUser = async (login, password) => {
    const user = await User.findOne({login: login});
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid || !user) throw new Error('Mot de passe et/ou login incorrect !')
    return user
}

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;