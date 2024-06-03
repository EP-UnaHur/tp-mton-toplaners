const {Router} = require('express')

const cursoController = require('../controllers/curso.controller')
const cursoMiddleware = require('../middlewares/middleware');
const cursoSchema = require('../schemas/curso.schema')
const profesorSchema = require('../schemas/profesor.schema')
const {Curso, Curso_Profesor, Profesor} = require('../db/models')


const route = Router()

route.get('/cursos', cursoController.findAll)
route.get('/cursos/:id',cursoMiddleware.existsById(Curso), cursoController.findById)
route.delete('/cursos/:id',cursoMiddleware.existsById(Curso), cursoMiddleware.existsIdInOtherModel(Curso, Curso_Profesor, 'id_curso'), cursoController.deleteById) //Falta el error 500 => affectsOtherRows?
route.put('/cursos/:id',cursoMiddleware.existsById(Curso), cursoMiddleware.validateSchema(cursoSchema), cursoController.updateById)
route.get('/cursos/:id/profesores',cursoMiddleware.existsById(Curso), cursoController.getProfesoresById) 
route.post('/cursos/:id/profesores',cursoMiddleware.existsById(Curso), cursoMiddleware.existsAllIdInModel(Profesor), cursoMiddleware.existsAllRegistersInModel(Profesor), cursoController.associateProfesoresById)



module.exports = route

/*
    Cosas que faltan en Curso:
    +Solucionar el put de cursos => Verificar que las validaciones de schema funcionen
    +Crear un middleware para lanzar el error 500 en el delete de cursos
    +Relacionar Curso con materia
    +Relacionar Curso_Profesor con profesor
    +Incluir registros y profesores en el get de curso/:id
*/