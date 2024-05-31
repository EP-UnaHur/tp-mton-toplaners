const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const profesorSchema = Joi.object().keys({

    nombre: Joi.string().required().messages({
        "any.required": "El campo nombre es obligatorio",
        "string.empty": "El campo nombre no puede estar vacio"  

    }),
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha de nacimiento debe ser YYYY-MM-DD",
        "any.required": "El campo fecha de nacimiento es obligatorio"
    }),
    legajo: Joi.number().required().messages({
        "any.required": "el campo legajo es obligatorio",
        "number.empty": "el campo legajo no puede estar vacio"
    }),
    activo: Joi.boolean().required().messages({
        "boolean.empty": "el campo activo no puede estar vacio",
        "any.required": "el campo activo es obligatorio"
    })
})

module.exports = profesorSchema