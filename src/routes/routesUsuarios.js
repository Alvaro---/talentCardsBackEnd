const { Router } = require('express');
const routerUsuarios = Router();

const { getUsuariosInvitados, getOneUsuario, getUserAdmin, deleteInvitado, guardarInvitado, deleteAllForHost } = require('../controllers/controllerUsuarios')

routerUsuarios.route('/:host')
    .get(getUsuariosInvitados)

// routerUsuarios.route('/:userName')
//     .get(getUsuariosInvitados)

routerUsuarios.route('/:userName/:host')
    .get(getOneUsuario)

routerUsuarios.route('/:userName/:pass')
    .get(getUserAdmin)

routerUsuarios.route('/allOne/:id')
    .delete(deleteInvitado)

routerUsuarios.route('/all/:host')
    .delete(deleteAllForHost)

routerUsuarios.route('/')
    .post(guardarInvitado)

module.exports = routerUsuarios;