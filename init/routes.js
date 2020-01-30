const clientesRouter = require('../api/clientes');
const cursosRouter = require('../api/cursos');

module.exports = (app) => {
    app.use('/clientes', clientesRouter);
    app.use('/cursos', cursosRouter);

    app.use('/', (req, res, next) => { res.status(200).json({code: 0, message: "Estás en la página de inicio"}) });
}