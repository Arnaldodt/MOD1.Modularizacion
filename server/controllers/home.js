const Animales = require("../models/modelo")

module.exports = (req, res) =>{
    Animales.find()
    .then(data => { 
        if (data.length===0)
            {res.redirect("/mongooses/nuevo")}
        else
            {res.render("index", {animales: data})} 
    })
    .catch(err => res.json(err));
};