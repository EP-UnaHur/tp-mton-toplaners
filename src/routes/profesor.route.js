
const {Router} = require('express')
const {Profesor} = require('../db/models')
const {Curso} = require('../db/models')
const profesorController = require('../controllers/profesor.controller')
const middlewareProfesor = require('../middlewares/middleware')
const routeProfesor = Router()

routeProfesor.get("/profesores", profesorController.getAllProfesores)

routeProfesor.get("/profesores/:id", middlewareProfesor.existsById(Profesor), profesorController.getProfesorById)

routeProfesor.get("/cursos/:id/profesores", middlewareProfesor.existsById(Curso) ,profesorController.getProfesoresCurso)

routeProfesor.post("/profesores",profesorController.createProfesor)

routeProfesor.put("/profesores/:id", profesorController.modifyProfesorById)

routeProfesor.delete("/profesores/:id",middlewareProfesor.existsById(Profesor) ,profesorController.deleteProfesorById)

//route.post("/cursos/:id/profesores", profesorController.asociarProfeCurso) ni idea como se hace este jaja

routeProfesor.get("/profesores/:id/cursos", middlewareProfesor.existsById(Profesor) ,profesorController.getCursosProfesor)
module.exports = routeProfesor