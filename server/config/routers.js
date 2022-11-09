const exp = require("express");
const router = exp.Router();

const home = require("../controllers/home");
router.get('/', (req, res) => { home(req,res) })

const crear = require("../controllers/crear");
router.get("/mongooses/nuevo", (req,res) => {  crear.nuevo(req,res) } );
router.post("/mongooses", (req,res) => { crear.Crear(req,res) } );

const editar = require("../controllers/editar");
router.get('/mongooses/:id', (req,res) => { editar.mostrar(req,res,"muestra") } );

router.get('/mongooses/editar/:id', (req,res) => { editar.mostrar(req,res,"editar") } );
router.post('/mongooses/:id', (req,res) => { editar.editar(req,res) } );

const destruir = require("../controllers/destruir");
router.post('/mongooses/destruir/:id', (req,res) => { destruir.destruir(req,res) } )

module.exports = router;

