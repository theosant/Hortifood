const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        const result = await user.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).json({ message: "Falha na criação do usuário"});
    }
};

const loginUser = async (req, res) => {
    try {
        console.log("1");
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(404).send({ message: "Email não encontrado" });
            console.log("2");
        const checkResult = await bcrypt.compare(req.body.password, user.password);
        if (!checkResult) {
            return res.status(400).send({ message: "Senha incorreta" });
        }
        console.log("3");
        const token = jwt.sign({ id: user._id, email: user.email }, "PRIVATE-KEY", { expiresIn: "24h" });
        console.log("4");
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Falha no login", error });
    }
};

module.exports = {
    registerUser,
    loginUser
};
