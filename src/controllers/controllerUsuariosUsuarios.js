const Usuario = require('../models/Usuario');

const usuarioCtrl = {}

usuarioCtrl.deleteUser = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete({ _id: req.params.id });
    } catch (error) {

    }
    res.json({ message: 'Usuario Eliminado' });
}

usuarioCtrl.getOneUsuario = async (req, res) => {
    //console.log(req.params.id);
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({ categoria: "user" });
    res.json(usuarios);
    console.log(usuarios);
};

usuarioCtrl.getUserAdmin = async (req, res) => {
    //console.log(req.params.id);
    const usuario = await Usuario.find({ userName: req.params.userName, clave: req.params.pass });
    res.json(usuario);
};

usuarioCtrl.crearUsuario = async (req, res) => {
    const { userName, categoria, clave, correo, telefono, fechaInicio, fechaFin } = req.body;
    const newUser = new Usuario({
        userName: userName,
        categoria: categoria,
        clave: clave,
        correo: correo,
        telefono: telefono,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
    });
    //console.log(newNote); 
    try {
        await newUser.save();
    } catch (error) {
        if (error.message.indexOf("11000") != -1) {
            // run some code here //
        }
    }

    res.json({ message: 'Invitado Guardada' })
};

usuarioCtrl.actualizarUsuario = async (req, res) => {
    const { id, userName, categoria, clave, correo, telefono, fechaInicio, fechaFin } = req.body;
    try {
        await Usuario.findOneAndUpdate({_id: req.params.id}, {
            userName: userName,
            categoria: categoria,
            clave: clave,
            correo: correo,
            telefono: telefono,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        });
    } catch (error) {
        if (error.message.indexOf("11000") != -1) {
            console.log("No actualiza?????");
        }
    }

    res.json({ message: 'Invitado Guardada' })
}

module.exports = usuarioCtrl;