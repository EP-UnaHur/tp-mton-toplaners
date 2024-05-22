const {Router} = require('express')

const cursoController = require('../controllers/curso.controller')
const cursoMiddleware = require('../middlewares/middleware');
const cursoSchema = require('../schemas/curso.schema')

const route = Router()

route.get('/cursos', cursoController.findAll)
route.get('/cursos/:id',cursoMiddleware.existsById(Curso), cursoController.findById)
route.delete('/cursos/:id',cursoMiddleware.existsById(Curso),cursoController.deleteById) //Falta el error 500 => affectsOtherRows?
route.put('/cursos/:id',cursoMiddleware.existsById(Curso), cursoController.updateById)

module.exports = route