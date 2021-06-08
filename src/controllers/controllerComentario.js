const Comentario = require('../models/Comentario');

const comentarioCtrol = {}

comentarioCtrol.guardarComentario = async (req, res) => {
    const { comentario, idTarjeta, idUser, userName, host } = req.body;
    const newComentario = new Comentario({
        comentario: comentario,
        idTarjeta: idTarjeta,
        idUser: idUser,
        userName: userName,
        host: host,
    });
    console.log("Comentario guardado");
    try {
        await newComentario.save();
    } catch (error) {
        //if (error.message.indexOf("11000") != -1) {
        console.log("error en el comentario")
        //}
    }
    res.json({ message: 'Invitado Guardada' })
};

comentarioCtrol.cargarComentarios = async (req, res) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
    console.log(comentarios);
};

comentarioCtrol.borrarComentario = async (req, res) => {
    await Comentario.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Comentario Eliminado' });
};

module.exports = comentarioCtrol;