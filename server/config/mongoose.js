const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animales', {useNewUrlParser: true});
module.exports = mongoose;