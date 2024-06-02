const { includes } = require("lodash")
const {Curso_Profesor, Curso, Profesor, Materia} = require("../db/models")
const controllerProfesor = {}


const getAllProfesores = async (req,res) => {
    res.status(200).json(await Profesor.findAll({}))
}
controllerProfesor.getAllProfesores = getAllProfesores


const getProfesorById = async (req,res) => {
    const ProfesorId = req.params.id 
    res.status(200).json(await Profesor.findByPk(ProfesorId))
}
controllerProfesor.getProfesorById = getProfesorById

const getProfesoresCurso = async (req, res) => {
    const cursoId = req.params.id 
    const ProfesoresDeCurso = await curso.findOne({
        where : {id:cursoId},
        include :[
            {
                model: Profesor,
                as:"Profesores"
            }
        ]
    }
    )
    res.status(200).json(ProfesoresDeCurso)
}
controllerProfesor.getProfesoresCurso = getProfesoresCurso

const createProfesor = async (req,res) => {
    const profesor = req.body
    const nuevoProfesor = await Profesor.create(profesor)
    res.status(201).json(nuevoProfesor)
}
controllerProfesor.createProfesor = createProfesor

const modifyProfesorById = async(req, res) => {
    const ProfesorUpdated = req.body
    console.log(req)
    const id = req.params.id
    const ProfesorAModificar = await Profesor.findByPk(id)
    await ProfesorAModificar.set(ProfesorUpdated)
    await ProfesorAModificar.save()
    res.status(200).json(ProfesorAModificar)
}
controllerProfesor.modifyProfesorById = modifyProfesorById

const deleteProfesorById = async(req, res) =>{
    const id = req.params.id
    await Profesor.destroy({where:{id}})
    res.status(200).json(`El Profesor con id ${id} se ha borrado correctamente`)
}
controllerProfesor.deleteProfesorById = deleteProfesorById

const getCursosProfesor = async (req, res) => {
    const ProfesorId = req.params.id 
    const cursosDeProfesor = await Profesor.findOne({
        where : {id:ProfesorId},
        include :[
            {
                model: Curso,
                as: 'cursos',
                include:[{
                    model:Materia,
                    as:'materia'
                    
                }],
                through:{
                    attributes: []
                }
            }
        ]
    }
    )
    res.status(200).json(cursosDeProfesor)
}
controllerProfesor.getCursosProfesor = getCursosProfesor 


module.exports = controllerProfesor