const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        //unique: true
    },
    categoria: String,
    clave: String,
    correo: String,
    telefono: String,
    host: String,
    fechaInicio: {
        type: Date,
        defaul: Date.now  
    },
    fechaFin: {
        type: Date,
        defaul: Date.now  
    }
}, {
    timestamps: true,
})

module.exports = model('Usuarios', usuarioSchema, 'Usuarios');