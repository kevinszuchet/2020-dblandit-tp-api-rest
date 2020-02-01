const cursosRouter = require('../api/cursos');

module.exports = (app) => {
    app.use('/cursos', cursosRouter);

    app.use('/', (req, res, next) => { res.status(200).json({ code: 0, message: "Welcome to the init page!" }) });
}