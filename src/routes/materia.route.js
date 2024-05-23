const {Router} = require('express')
const {Materia} = require('../db/models')
const userController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/middleware')
const materiaSchema = require('../schemas/materia.schema')
const route = Router()

route.get('/materias', userController.getAllMaterias)

route.get('materias/:id', middlewareMateria.existsById ,userController.materiaById)

route.delete('/materia/:id', middlewareMateria.existsById, userController.deleteMateriaById)

route.post('materia/:id/cursos', middlewareMateria.existsById, userController.crearCurso)

route.get('materias/:id/cursos', middlewareMateria.existsById, userController.getCursosDeUnaMateria)