const Usuario = require('../models/Usuario');

const usuarioCtrl = {}

usuarioCtrl.getUsuariosInvitados = async (req, res) => {
    const usuarios = await Usuario.find({ userName: req.params.userName });
    console.log(usuarios);
    res.json(usuarios);
};

module.exports = usuarioCtrl;