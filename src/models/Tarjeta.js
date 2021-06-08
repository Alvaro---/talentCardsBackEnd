const { Schema, model } = require('mongoose');

const tarjetaSchema = new Schema({
    number: String,
    categoria: String,
    tarjeta: String,
    frase: String,
    definicion: String,
    comportamientos: String,
    desafios: String,
}, {
    timestamps: true,
})

module.exports = model('Tarjetas', tarjetaSchema, 'Tarjetas');