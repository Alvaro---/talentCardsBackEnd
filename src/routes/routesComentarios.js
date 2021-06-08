const { Router } = require('express');
const routerComentarios = Router();

const { guardarComentario, cargarComentarios, borrarComentario } = require('../controllers/controllerComentario')

routerComentarios.route('/')
    .post(guardarComentario)

routerComentarios.route('/')
    .get(cargarComentarios)

    routerComentarios.route('/:id')
    .delete(borrarComentario)

module.exports = routerComentarios;