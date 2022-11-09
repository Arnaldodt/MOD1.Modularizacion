const express = require("express");
const bodyparse = require("body-parser");
const BBDD = require("./server/config/mongoose")

const app = express();
app.use(bodyparse.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',__dirname + '/client/views');
app.use("/recursos", express.static(__dirname + "/client/static"));

const router = require("./server/config/routers")
app.use(router)

const puerto = require('./server/config/puerto.js')(app);