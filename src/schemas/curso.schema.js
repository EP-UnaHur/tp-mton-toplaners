const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().messages({    
    }),
    turno: Joi.string().required().messages({
        "any.required": "El campo turno es obligatorio",
        "string.empty": "El campo turno debe ser llenado"   
    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha de inicio es obligatorio"
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha de inicio es obligatorio"
    })
   
})

module.exports = cursoSchema