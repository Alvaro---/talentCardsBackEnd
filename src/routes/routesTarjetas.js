const { Router } = require('express');
const routerTarjetas = Router();

const { getTarjetas, getOneTarjeta } = require('../controllers/controllerTarjetas')

routerTarjetas.route('/')
    .get(getTarjetas)

routerTarjetas.route('/:id')
    .get(getOneTarjeta)

module.exports = routerTarjetas;