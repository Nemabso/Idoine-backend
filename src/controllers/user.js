const bcrypt = require("bcryptjs");
const User = require('../models/user');

const getOne = async (req, res, next) => {
    try {
        
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

const update = async (req, res, next) => {       
    // TODO add jwt authentication at this stage

    try {
        
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getOne, create, update,
};