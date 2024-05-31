const Joi = require("joi")

const carreraSchema = Joi.object().keys({

    nombre: Joi.string().required().messages({
        "any.required": "El campo nombre es obligatorio",
        "string.empty": "El campo nombre no puede estar vacio"  

    }),

    grado: Joi.string().required().messages({
        "any.required": "El campo grado es obligatorio",
        "string.empty": "El campo grado no puede estar vacio"  

    }),

    universidad: Joi.string().required().messages({
        "any.required": "El campo universidad es obligatorio",
        "string.empty": "El campo universidad no puede estar vacio"  

    })

})

module.exports = carreraSchema