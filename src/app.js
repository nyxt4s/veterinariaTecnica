const express = require('express');
const dotenv = require('dotenv');
// const routerApi = require('./routes/index.js');
const RazaController = require('./Controllers/Raza.Controller.js');
const PersonaController = require('./Controllers/Persona.Controller.js');
const FamiliaController = require('./Controllers/Familia.Controller.js');
const MascotaController = require('./Controllers/Mascota.Controller.js');
const cors = require("cors");

dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000 ;



app.use(express.json());


// configuracion cors
var whitelist = ['http://127.0.0.1:5173', 'http://localhost:3000']; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions)); //adding cors middleware to the express with above configurations



  // routerApi(app);

// raza
app.get('/raza', RazaController.get)
app.get('/raza/:id', RazaController.getById)
app.post('/raza/', RazaController.create)
app.put('/raza/:id', RazaController.update)
app.delete('/raza/:id', RazaController._delete)

// familia
app.get('/familia', FamiliaController.get)
app.get('/familia/:id', FamiliaController.getById)
app.post('/familia/', FamiliaController.create)
app.put('/familia/:id', FamiliaController.update)
app.delete('/familia/:id', FamiliaController._delete)


// mascota
app.get('/mascota', MascotaController.get)
app.get('/mascota/:id', MascotaController.getById)
app.post('/mascota', MascotaController.create)
app.put('/mascota/:id', MascotaController.update)
app.delete('/mascota/:id', MascotaController._delete)

// persona
app.get('/persona', PersonaController.get)
app.get('/persona/:id', PersonaController.getById)
app.post('/persona/', PersonaController.create)
app.put('/persona/:id', PersonaController.update)
app.delete('/persona/:id', PersonaController._delete)



app.listen(port, ()=>    {
    console.log('servidor funcionando en el puerto ', port );
});

