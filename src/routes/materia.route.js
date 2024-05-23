const {Router} = require('express')
const {Materia} = require('../db/models')
const userController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/middleware')
//const materiaSchema = require('../schemas/materia.schema')
const cursoSchema = require('../schemas/curso.schema')
const route = Router()

route.get('/materias', userController.getAllMaterias)

route.get('/materias/:id', middlewareMateria.existsById(Materia) ,userController.materiaById)

route.delete('/materias/:id', middlewareMateria.existsById(Materia), userController.deleteMateriaById, userController.deleteMateriaById)

route.post('/materias/:id/curso', middlewareMateria.validateSchema(cursoSchema), middlewareMateria.existsById(Materia), userController.crearCurso)

route.get('/materias/:id/cursos', middlewareMateria.existsById(Materia), userController.getCursosDeUnaMateria)

module.exports = route