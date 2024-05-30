
const {Router} = require('express')
const {Profesor} = require('../db/models')
const {Curso} = require('../db/models')
const profesorSchema = require("../schemas/profesor.schema")
const profesorController = require('../controllers/profesor.controller')
const profesorMiddleware = require('../middlewares/middleware')
const routeProfesor = Router()

routeProfesor.get("/profesores", profesorController.getAllProfesores)

routeProfesor.get("/profesores/:id", profesorMiddleware.existsById(Profesor), profesorController.getProfesorById)

routeProfesor.get("/cursos/:id/profesores", profesorMiddleware.existsById(Curso) ,profesorController.getProfesoresCurso)

routeProfesor.post("/profesores",profesorController.createProfesor)

routeProfesor.put("/profesores/:id", profesorMiddleware.validateSchema(profesorSchema),profesorController.modifyProfesorById)

routeProfesor.delete("/profesores/:id",profesorMiddleware.existsById(Profesor) ,profesorController.deleteProfesorById)

//route.post("/cursos/:id/profesores", profesorController.asociarProfeCurso) ni idea como se hace este jaja

routeProfesor.get("/profesores/:id/cursos", profesorMiddleware.existsById(Profesor) ,profesorController.getCursosProfesor)


module.exports = routeProfesor