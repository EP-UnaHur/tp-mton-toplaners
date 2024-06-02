const {Curso, Curso_Profesor, Profesor, Materia} = require('../db/models')
const controller = {}

const findAll = async(req, res) => {
    res.status(200).json(await Curso.findAll({}))
}
controller.findAll = findAll

const findById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Curso.findOne({
        where:{id},
        include: [
            {
                model: Materia,
                as: 'materia',
            }
        ]
    }))
}
controller.findById = findById

const deleteById = async(req, res) =>{
    const id = req.params.id
    await Curso.destroy({where:{id}})
    res.status(200).json(`El curso con id ${id} se ha borrado correctamente`)
}
controller.deleteById = deleteById

const updateById = async(req, res) => {
    const cursoUpdated = req.body
    console.log(req)
    const id = req.params.id
    const cursoToUpdate = await Curso.findByPk(id)
    await cursoToUpdate.set(cursoUpdated)
    await cursoToUpdate.save()
    res.status(200).json(`El curso con id ${id} se ha actualizado correctamente`)
}
controller.updateById = updateById

const getProfesoresById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Curso.findOne({
        where:{id},
        include: [
            {
                model: Materia,
                as: 'materia',
            },
            {
                model: Profesor,
                as: 'profesores',
                through:{
                    attributes: []
                }
            }
        ],
    }))
}
controller.getProfesoresById = getProfesoresById


const associateProfesoresById = async(req, res) => {
    const listaProfes = req.body
    const id = req.params.id
    listaProfes.map(async (profe) => {
        await Curso_Profesor.create({id_curso: id, id_profesor: profe.id})
    })
    res.status(200).json(`El Curso ${id} se asocio con los profesores correctamente`)
}
controller.associateProfesoresById = associateProfesoresById

module.exports = controller