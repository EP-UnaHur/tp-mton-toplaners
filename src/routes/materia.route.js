const {Router} = require('express')
const {Materia, Curso} = require('../db/models')
const materiaController = require('../controllers/materia.controller')
const materiaMiddleware = require('../middlewares/middleware')
const materiaSchema = require('../schemas/materia.schema')
const route = Router()

route.get('/materias', materiaController.getAllMaterias)

route.get('/materias/:id', materiaMiddleware.existsById(Materia) ,materiaController.materiaById)

route.delete('/materias/:id', materiaMiddleware.existsById(Materia), materiaMiddleware.existsIdInOtherModel(Materia, Curso, 'id_materia'), materiaController.deleteMateriaById)

route.post('/materias/:id/curso', materiaMiddleware.validateSchema(materiaSchema), materiaMiddleware.existsById(Materia), materiaController.crearCurso)

route.get('/materias/:id/cursos', materiaMiddleware.existsById(Materia), materiaController.getCursosDeUnaMateria)

module.exports = route