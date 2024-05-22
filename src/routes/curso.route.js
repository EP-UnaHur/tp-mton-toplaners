const {Router} = require('express')
const cursoController = require('../controllers/curso.controller')
const route = Router()

route.get('/cursos', cursoController.findAll)
route.get('/cursos/:id', cursoController.findById)
route.delete('/cursos/:id', cursoController.deleteById)
route.put('/cursos/:id', cursoController.updateById)

module.exports = route