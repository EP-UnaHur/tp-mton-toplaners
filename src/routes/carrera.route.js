const {Router} = require('express')
const {Carrera} = require('../db/models')
const userController = require('../controllers/carrera.controller')
const middlewareCarrera = require('../middlewares/middleware')
const route = Router()

route.get("/carreras", userController.getAllCarreras)

route.get("/carreras/:id", middlewareCarrera.existsById(Carrera), userController.getCarreraId)

route.get("/carreras/:id/materias",middlewareCarrera.existsById(Carrera), userController.getMateriasInCarrera)

route.post("/carreras", userController.createCarrera)

route.post("/carreras/:id/materia", middlewareCarrera.existsById(Carrera), userController.createMateriaInCarrera)


module.exports = route