const {Router} = require('express')
const {Carrera} = require('../db/models')
const carreraController = require('../controllers/Carrera.controller')
const carreraMiddleware = require('../middlewares/middleware')
const carreraSchema = require("../schemas/carrera.schema")
const materiaSchema = require("../schemas/materia.schema")
const carreraRouter = Router()

carreraRouter.get("/carreras", carreraController.getAllCarreras)

carreraRouter.get("/carreras/:id", carreraMiddleware.existsById(Carrera), carreraController.getCarreraById)

carreraRouter.get("/carreras/:id/materias",carreraMiddleware.existsById(Carrera), carreraController.getMateriasInCarrera)

carreraRouter.post("/carreras", carreraMiddleware.validateSchema(carreraSchema), carreraController.createCarrera)

carreraRouter.post("/carreras/:id/materia", carreraMiddleware.existsById(Carrera),carreraMiddleware.validateSchema(materiaSchema) ,carreraController.createMateriaInCarrera)


module.exports = carreraRouter;