const bcrypt = require("bcryptjs");
const User = require('../models/user');

const getAll = async (req, res, next) => {
    try {
        const users = await User.find({}).select('login createdAt updatedAt').exec();
        const count = await User.count();
        res.send({
            list: users,
            total: count,
        });
    } catch (err) {
        res.status(500).send(err);
    }
    //next();
}

const getOne = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('login createdAt updatedAt').exec();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
    //next();
}

const create = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        login: req.body.login,
        password: hashedPassword,
    });

    try {
        const saveUser = await user.save();
        res.status(201).send(saveUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

const login = async (req, res, next) => {
    const user = await User.findUser(req.body.login, req.body.password);
    if (!user) {
        res.status(401).send('Mot de passe et/ou identifiant invalide !');
        return;
    }

    try {
        // const user = await User.findUser(req.body.login, req.body.password);
        const token = await user.generateJwt();
        res.status(200).send(token);
    } catch (err) {
        res.status(500).send(err);
    }
}

const update = async (req, res, next) => {       
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, {password: hashedPassword});
        res.status(200).send(updatedUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getAll, getOne, create, update, login,
};