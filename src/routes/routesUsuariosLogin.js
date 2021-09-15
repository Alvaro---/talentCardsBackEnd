const { Router } = require('express');
const routerUsuariosInvitados = Router();

const { getUsuariosInvitados} = require('../controllers/controllerUsuariosInvitados')

routerUsuariosInvitados.route('/:userName')
    .get(getUsuariosInvitados)


module.exports = routerUsuariosInvitados;