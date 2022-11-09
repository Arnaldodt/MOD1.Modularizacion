const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
    nombre: {type:String,required:true,maxlength:20},
    tipo: {type:String,required:true,maxlength:20},
    donde_vive: {type:String,required:true,maxlength:20},
    edad: {type:Number,min:1,max:100}
})

module.exports = mongoose.model('Animales', esquema);

