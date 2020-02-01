const mongoose = require('mongoose');

const Curso = new mongoose.Schema({
    anio: Number,
    duracion: Number,
    tema: String,
    alumnos: [{
        nombre: String,
        apellido: String,
        dni: { type: Number, unique: true },
        direccion: String,
        nota: Number
    }]
}, { collection: 'cursos' });

module.exports = mongoose.model('Curso', Curso);
