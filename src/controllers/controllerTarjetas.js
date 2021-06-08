const Tarjeta = require('../models/Tarjeta');

const tarjetaCtrl = {}

tarjetaCtrl.getTarjetas = async (req, res) => {
    const tarjeta = await Tarjeta.find();
    res.json(tarjeta);
    console.log(tarjeta);
};

tarjetaCtrl.getOneTarjeta = async (req, res) => {
    //console.log(req.params.id);
    const tarjeta = await Tarjeta.findById(req.params.id);
    res.json(tarjeta);
};


module.exports = tarjetaCtrl;