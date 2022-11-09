const Animales = require("../models/modelo")

const nuevo = (req, res) =>  {
    res.render("nuevo");
}

const Crear = (req, res) => {
        Animales.create(req.body)
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));
        res.redirect('/');
}

module.exports = {nuevo , Crear}