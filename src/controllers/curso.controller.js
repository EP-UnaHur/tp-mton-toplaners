const {Curso, Curso_Profesor} = require('../db/models')
const controller = {}

const findAll = async(req, res) => {
    res.status(200).json(await Curso.findAll({}))
}
controller.findAll = findAll

const findById = async(req, res) => {
    const id = req.params.id
    res.status(200).json(await Curso.findOne({
        where:{id},
        include: [{
            model: Curso_Profesor,
            as: 'registros'
            //Aca falta incluir a los profesores con dichos registros
        }]
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
    const id = req.params.id
    const cursoToUpdate = await Curso.findByPk(id)
    console.log(cursoToUpdate)
    console.log(cursoUpdated)
    res.status(200).json(cursoUpdated)
}
controller.updateById = updateById

module.exports = controller