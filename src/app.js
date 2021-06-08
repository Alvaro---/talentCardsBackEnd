const express = require('express');
const cors=require('cors');

const app=express(); //Crea servidor


//setings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/tarjetas', require ('./routes/routesTarjetas.js'));
app.use('/api/usuariosInvitados', require ('./routes/routesUsuarios.js'));
app.use('/api/usuariosUsuarios', require ('./routes/routesUsuariosUsers.js'));
app.use('/api/comentarios', require ('./routes/routesComentarios.js'));

module.exports =app; 