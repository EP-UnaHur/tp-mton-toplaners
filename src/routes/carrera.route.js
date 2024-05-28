const {Router} = require('express')
const {carrera} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const middlewareCarrera = require('../middlewares/middleware')
const routerCarrera = Router()

routerCarrera.get("/carreras", carreraController.getAllCarreras)

routerCarrera.get("/carreras/:id", middlewareCarrera.existsById(carrera), carreraController.getCarreraById)

routerCarrera.get("/carreras/:id/materias",middlewareCarrera.existsById(carrera), carreraController.getMateriasInCarrera)

routerCarrera.post("/carreras", carreraController.createCarrera)

routerCarrera.post("/carreras/:id/materia", middlewareCarrera.existsById(carrera), carreraController.createMateriaInCarrera)


module.exports = routerCarrera