
const {Router} = require('express')
const {Profesor, Curso, Curso_Profesor} = require('../db/models')
const profesorSchema = require("../schemas/profesor.schema")
const profesorController = require('../controllers/profesor.controller')
const profesorMiddleware = require('../middlewares/middleware')
const routeProfesor = Router()

routeProfesor.get("/profesores", profesorController.getAllProfesores)

routeProfesor.get("/profesores/:id", profesorMiddleware.existsById(Profesor), profesorController.getProfesorById)

//routeProfesor.get("/cursos/:id/profesores", profesorMiddleware.existsById(Curso) ,profesorController.getProfesoresCurso)// Este ya está en Curso 

routeProfesor.post("/profesores",profesorMiddleware.validateSchema(profesorSchema), profesorController.createProfesor)

routeProfesor.put("/profesores/:id",profesorMiddleware.existsById(Profesor), profesorMiddleware.validateSchema(profesorSchema),profesorController.modifyProfesorById)

routeProfesor.delete("/profesores/:id",profesorMiddleware.existsById(Profesor), profesorMiddleware.existsIdInOtherModel(Profesor, Curso_Profesor, 'id_profesor'), profesorController.deleteProfesorById)

routeProfesor.get("/profesores/:id/cursos", profesorMiddleware.existsById(Profesor) ,profesorController.getCursosProfesor)


module.exports = routeProfesor