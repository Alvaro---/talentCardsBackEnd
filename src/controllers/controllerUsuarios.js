const Usuario = require('../models/Usuario');

const usuarioCtrl = {}

usuarioCtrl.getUsuariosInvitados = async (req, res) => {
    const usuarios = await Usuario.find({ host: req.params.host });
    res.json(usuarios);
    //console.log(usuarios);
};

// usuarioCtrl.getUsuariosInvitados = async (req, res) => {
//     const usuarios = await Usuario.find({ userName: req.params.userName });
//     console.log(usuarios);
//     res.json(usuarios);
// };

usuarioCtrl.getOneUsuario = async (req, res) => {
    //console.log(req.params.id);
    const usuario = await Usuario.find({ userName: req.params.userName, host: req.params.host });
    res.json(usuario);
};

usuarioCtrl.getUserAdmin = async (req, res) => {
    //console.log(req.params.id);
    const usuario = await Usuario.find({ userName: req.params.userName, clave: req.params.pass });
    res.json(usuario);
};

usuarioCtrl.deleteInvitado = async (req, res) => {
    await Usuario.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Usuario Eliminado' });
};

usuarioCtrl.deleteAllForHost = async (req, res) => {
    //console.log("??????????????????????????")
    try{
        await Usuario.deleteMany({ host: req.params.host });
    }catch(error){

    }
    res.json({ message: 'Usuarios Eliminado' });
};

usuarioCtrl.guardarInvitado = async (req, res) => {
    const { userName, host } = req.body;
    const newInvitado = new Usuario({
        userName: userName,
        host: host,
        categoria: "Invitado"
    });
    //console.log(newNote); 
    try {
        await newInvitado.save();
    } catch (error) {
        if (error.message.indexOf("11000") != -1) {
            // run some code here //
        }
    }

    res.json({ message: 'Invitado Guardada' })
};

module.exports = usuarioCtrl;