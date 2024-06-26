const {Materia, Curso} = require('../db/models')

const controller = {}

const getAllMaterias = async (req, res) => {
    res.status(200).json(await Materia.findAll({}))
}
controller.getAllMaterias = getAllMaterias;

const materiaById = async (req, res) => {
    const idMateria = req.params.id
    res.status(200).json(await Materia.findByPk(idMateria))
}
controller.materiaById = materiaById;

const deleteMateriaById = async(req, res) => {
    const id = req.params.id
    const row = await Materia.destroy({where: {id}})
    res.status(200).json(`La materia con id ${id} se borrado con éxito`)
}
controller.deleteMateriaById = deleteMateriaById;

const crearCurso = async (req, res) => {
    const idMateria = req.params.id
    const materia = await Materia.findByPk(idMateria)
    const curso = req.body
    const nuevoRegistro = await Curso.create({id_materia: materia.id, ...curso})
    res.status(200).json(nuevoRegistro)
}
controller.crearCurso = crearCurso;

const getCursosDeUnaMateria = async (req, res) => {
    const idMateria = req.params.id
    const cursosDeMateria = await Materia.findOne(
    {    
        where: {id: idMateria},
        include: [
            {
            model: Curso,
            as: 'cursos'
            }
        ]
    })
    res.status(200).json(cursosDeMateria)
}
controller.getCursosDeUnaMateria = getCursosDeUnaMateria;

module.exports = controller
