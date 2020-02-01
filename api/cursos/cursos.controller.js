const _ = require("lodash");
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const Curso = require("../../domain/models/cursos.model");

module.exports = {
    get: ({ query: { anio, duracion } }, res) => {
        let conditions = {};
        if (anio)
            conditions = { ...conditions, anio };

        if (duracion)
            conditions = { ...conditions, duracion };

        return Curso.find(conditions)
            .then(cursos => res.status(200).json(cursos))
            .catch(err => res.status(500).json(err));
    },

    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json(errors.array());

        const { body: { anio, duracion, tema, alumnos } } = req;

        const newCurso = new Curso({
            anio,
            duracion, 
            tema,
            alumnos: alumnos.map(({ nombre, apellido, dni, direccion, nota }) => ({ nombre, apellido, dni, direccion, nota }))
        });

        return newCurso.save()
            .then(created => res.status(201).json(created))
            .catch(err => res.status(500).json(err));
    },
    
    delete: ({ params: { id: _id } }, res) => {
        return Curso.deleteOne({ _id })
            .then(deleted => res.status(204).json(deleted))
            .catch(err => res.status(500).json(err));
    },

    getAlumnos: ({ params: { id }, query: { sortBy, sortType, limit } }, res) => {
        const pipeline = [
            { $match: { _id: mongoose.Types.ObjectId(id) } },
            { $unwind: "$alumnos" }
        ];

        if (sortBy) {
            const sortConditions = {};
            sortConditions[`alumnos.${sortBy}`] = sortType.toLowerCase() == "desc" ? -1 : 1;
            pipeline.push({ $sort: sortConditions });
        }

        if (limit)
            pipeline.push({ $limit: parseInt(limit) });

        return Curso.aggregate(pipeline)
            .then(cursos => {
                if (_.isEmpty(cursos))
                    res.status(404).json({ error : "El curso solicitado no existe" });

                res.status(200).json(cursos.map(({ alumnos }) => alumnos))
            })
            .catch(err => res.status(500).json(err));

    }
}