const {Router} = require('express')
const {Materia} = require('../db/models')
const userController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/middleware')
const materiaSchema = require('../schemas/materia.schema')
const route = Router()

route.get('/materias', userController.getAllMaterias)

route.get('materias/:id', middlewareMateria.existsById ,userController.materiaById)