const Animales = require("../models/modelo")

module.exports = {  
    mostrar: (req, res, destino)=>{
        Animales.findOne({_id: req.params.id })
        .then(data => { 
            if (data.length===0)
                {res.send("<h1>Datos no encontrado</h1>")}
            else
                {res.render(destino, {animales: data})} 
        })
        .catch(err => res.json(err));
    },
    editar: (req, res) => {
        Animales.updateOne({_id: req.params.id},req.body)
        .then(data => { 
            if (data.length===0)
                {res.send("<h1>Datos no encontrado</h1>")}
            else
                {res.redirect("/")} 
        })
        .catch(err => res.json(err));
    }
}