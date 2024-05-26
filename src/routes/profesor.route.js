const {Router} = require('express')
const {Profesor} = require('../db/models')
const {Curso} = require('../db/models')
const userController = require('../controllers/profesor.controller')
const middlewareCarrera = require('../middlewares/middleware')
const route = Router()

route.get("/profesores", userController.getAllProfesores)

route.get("/profesores/:id", middlewareCarrera.existsById(Profesor), userController.getProfesorId)

route.get("/cursos/:id/profesores", middlewareCarrera.existsById(Curso) ,userController.getProfesoresCurso)

route.post("/profesores",userController.createProfesor)

route.put("/profesores/:id", userController.modifyProfesor)

route.delete("/profesores/:id",middlewareCarrera.existsById(Profesor) ,userController.deleteProfesorId)

route.post("/cursos/:id/profesores", userController.asociarProfeCurso)

route.get("/profesores/:id/cursos", middlewareCarrera.existsById(Profesor) ,userController.getCursosProfesor)