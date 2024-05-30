const {Router} = require('express')
const {carrera} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const middlewareCarrera = require('../middlewares/middleware')
const carreraSchema = require("../schemas/carrera.schema")
const materiaSchema = require("../schemas/materia.schema")
const routerCarrera = Router()

routerCarrera.get("/carreras", carreraController.getAllCarreras)

routerCarrera.get("/carreras/:id", middlewareCarrera.existsById(carrera), carreraController.getCarreraById)

routerCarrera.get("/carreras/:id/materias",middlewareCarrera.existsById(carrera), carreraController.getMateriasInCarrera)

routerCarrera.post("/carreras", carreraController.createCarrera)

routerCarrera.post("/carreras/:id/materia", middlewareCarrera.existsById(carrera),middlewareCarrera.validateSchema(materiaSchema) ,carreraController.createMateriaInCarrera)


module.exports = routerCarrera