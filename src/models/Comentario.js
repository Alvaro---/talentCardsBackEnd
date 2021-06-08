const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
    comentario: String,
    idTarjeta: String,
    idUser: String,
    userName: String,
    host: String,
}, {
    timestamps: true,
})

module.exports = model('Comentarios', comentarioSchema, 'Comentarios');