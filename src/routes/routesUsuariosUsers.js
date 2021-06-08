const { Router } = require('express');
const routerUsuarios = Router();

const { getUsuarios, getUserAdmin, crearUsuario, getOneUsuario, deleteUser, actualizarUsuario } = require('../controllers/controllerUsuariosUsuarios')

routerUsuarios.route('/')
    .get(getUsuarios)

routerUsuarios.route('/:userName/:pass')
    .get(getUserAdmin)

routerUsuarios.route('/')
    .post(crearUsuario)

routerUsuarios.route('/:id')
    .get(getOneUsuario)

routerUsuarios.route('/:id')
    .delete(deleteUser)

routerUsuarios.route('/:id')
    .put(actualizarUsuario)

module.exports = routerUsuarios;