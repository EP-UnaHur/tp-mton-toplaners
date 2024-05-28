const {Curso, profesor} = require("../db/models")
const controllerProfesor = {}


const getAllProfesores = async (req,res) => {
    res.status(200).json(await profesor.findAll({}))
}
controllerProfesor.getAllProfesores = getAllProfesores


const getProfesorById = async (req,res) => {
    const profesorId = req.params.id 
    res.status(200).json(await profesor.findByPk(profesorId))
}
controllerProfesor.getProfesorById = getProfesorById

const getProfesoresCurso = async (req, res) => {
    const cursoId = req.params.id 
    const profesoresDeCurso = await curso.findOne({
        where : {id:cursoId},
        include :[
            {
                model: profesor,
                as:"Profesores"
            }
        ]
    }
    )
    res.status(200).json(profesoresDeCurso)
}
controllerProfesor.getProfesoresCurso = getProfesoresCurso

const createProfesor = async (req,res) => {
    const profesor = req.body
    const nuevoProfesor = await profesor.create(profesor)
    res.status(201).json(nuevoProfesor)
}
controllerProfesor.createProfesor = createProfesor

const modifyProfesorById = async(req, res) => {
    const profesorUpdated = req.body
    console.log(req)
    const id = req.params.id
    const profesorAModificar = await profesor.findByPk(id)
    await profesorAModificar.set(profesorUpdated)
    await profesorAModificar.save()
    res.status(200).json(profesorUpdated)
}
controllerProfesor.modifyProfesorById = modifyProfesorById

const deleteProfesorById = async(req, res) =>{
    const id = req.params.id
    await profesor.destroy({where:{id}})
    res.status(200).json(`El profesor con id ${id} se ha borrado correctamente`)
}
controllerProfesor.deleteProfesorById = deleteProfesorById

const getCursosProfesor = async (req, res) => {
    const profesorId = req.params.id 
    const cursosDeProfesor = await profesor.findOne({
        where : {id:profesorId},
        include :[
            {
                model: curso,
                as:"Cursos"
            }
        ]
    }
    )
    res.status(200).json(cursosDeProfesor)
}
controllerProfesor.getCursosProfesor = getCursosProfesor 


module.exports = controllerProfesor