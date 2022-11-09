const Animales = require("../models/modelo")

module.exports = {
    destruir: (req, res) => {
        Animales.remove({_id: req.params.id})
        .then(data => { 
            if (data.length===0)
                {res.send("<h1>Datos no encontrado</h1>")}
            else
                {res.redirect("/")} 
        })
        .catch(err => res.json(err));
    }
}