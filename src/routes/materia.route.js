const {Router} = require('express')
const {Materia, Curso} = require('../db/models')
const materiaController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/middleware')
//const materiaSchema = require('../schemas/materia.schema')
const cursoSchema = require('../schemas/curso.schema')
const route = Router()

route.get('/materias', materiaController.getAllMaterias)

route.get('/materias/:id', middlewareMateria.existsById(Materia) ,materiaController.materiaById)

route.delete('/materias/:id', middlewareMateria.existsById(Materia), middlewareMateria.existsIdInOtherModel(Materia, Curso, 'id_materia'), materiaController.deleteMateriaById)

route.post('/materias/:id/curso', middlewareMateria.validateSchema(cursoSchema), middlewareMateria.existsById(Materia), materiaController.crearCurso)

route.get('/materias/:id/cursos', middlewareMateria.existsById(Materia), materiaController.getCursosDeUnaMateria)

module.exports = route