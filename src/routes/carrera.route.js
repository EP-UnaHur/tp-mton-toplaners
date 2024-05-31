const {Router} = require('express')
const {carrera} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const carreraMiddleware = require('../middlewares/middleware')
const carreraSchema = require("../schemas/carrera.schema")
const routerCarrera = Router()

routerCarrera.get("/carreras", carreraController.getAllCarreras)

routerCarrera.get("/carreras/:id", carreraMiddleware.existsById(carrera), carreraController.getCarreraById)

routerCarrera.get("/carreras/:id/materias",carreraMiddleware.existsById(carrera), carreraController.getMateriasInCarrera)

routerCarrera.post("/carreras", carreraMiddleware.validateSchema(carreraSchema), carreraController.createCarrera)

routerCarrera.post("/carreras/:id/materia", carreraMiddleware.existsById(carrera),carreraMiddleware.validateSchema(carreraSchema) ,carreraController.createMateriaInCarrera)


module.exports = routerCarrera