const { check } = require('express-validator');

const create = [
    check('anio').isNumeric().withMessage("El año debe ser numérico"),
    // check('anio').if(value => value < 0).withMessage("El año debe ser positivo"),
    check('duracion').isNumeric().withMessage("La duración debe ser numérica"),
    // check('duracion').if(value => value < 0).withMessage("La duración debe ser positiva"),
    check('tema').exists().withMessage("Debe elegir el tema del curso")
];

module.exports = { create };
