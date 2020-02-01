const express = require("express");
const controller = require("./cursos.controller");
const validators = require("./cursos.validators");

const router = express.Router();

router.get("/", controller.get);
router.post("/", validators.create, controller.create);
router.delete("/:id", controller.delete);

router.get("/:id/alumnos", controller.getAlumnos);

module.exports = router;